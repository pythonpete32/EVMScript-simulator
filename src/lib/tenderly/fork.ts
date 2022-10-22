import { JsonRpcProvider } from '@ethersproject/providers';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import { AragonTenderlyFork, TenderlyFork } from '@type/index';
import config from '../../config';
import abi from '../../abis/agent';
dotenv.config();

export const anAxiosOnTenderly = () =>
  axios.create({
    baseURL: 'https://api.tenderly.co/api/v1',
    headers: {
      'X-Access-Key': process.env.TENDERLY_ACCESS_KEY || '',
      'Content-Type': 'application/json',
    },
  });

export async function forkForTest(): Promise<AragonTenderlyFork> {
  const fork: TenderlyFork = {
    network_id: String(config.networkId),
  };

  const projectUrl = `account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`;
  const axiosOnTenderly = anAxiosOnTenderly();

  const forkResponse = await axiosOnTenderly.post(`${projectUrl}/fork`, fork);
  const forkId = forkResponse.data.root_transaction.fork_id;

  const provider = new JsonRpcProvider(`https://rpc.tenderly.co/fork/${forkId}`);
  await provider.send('tenderly_setBalance', [
    config.voting,
    ethers.utils.hexValue(ethers.utils.parseUnits('10', 'ether').toHexString()),
  ]);
  const bn = (forkResponse.data.root_transaction.receipt.blockNumber as string).replace('0x', '');
  const blockNumber: number = Number.parseInt(bn, 16);

  console.info('Forked with fork id at block number', forkId, blockNumber);

  const accounts = forkResponse.data.simulation_fork.accounts;
  const signers = Object.keys(accounts).map((address) => provider.getSigner(address));

  const agent = new ethers.Contract(config.agent, abi, provider);

  return {
    provider,
    accounts,
    signers,
    blockNumber,
    id: forkId,
    agent,
    fork,
    removeFork: async () => {
      console.log('Removing test fork', forkId);
      return await axiosOnTenderly.delete(`${projectUrl}/fork/${forkId}`);
    },
  };
}

export const tenderlyProjectUrl = () =>
  `account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`;

export const tenderlyProjectOperation = (...path: any[]) =>
  [`account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`, ...path]
    .join('/')
    .replace('//', '');
