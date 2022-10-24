import { JsonRpcProvider } from '@ethersproject/providers';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import { AragonTenderlyFork, ForkCliProps, TenderlyFork } from '@type/index';
import config from '../../config';
import abi from '../../abis/agent';
import chalk from 'chalk';

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
  console.log(
    `https://dashboard.tenderly.co/${process.env.TENDERLY_USER}/${process.env.TENDERLY_PROJECT}/fork/${forkId}`,
  );

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

export async function forkForCli({
  user,
  project,
  agentAddress,
  votingAddress,
  tenderlyKey,
}: ForkCliProps): Promise<AragonTenderlyFork> {
  const fork: TenderlyFork = {
    network_id: '1',
  };

  const projectUrl = `account/${user}/project/${project}`;
  const axiosOnTenderly = axios.create({
    baseURL: 'https://api.tenderly.co/api/v1',
    headers: {
      'X-Access-Key': tenderlyKey,
      'Content-Type': 'application/json',
    },
  });

  const forkResponse = await axiosOnTenderly.post(`${projectUrl}/fork`, fork);
  const forkId = forkResponse.data.root_transaction.fork_id;

  const provider = new JsonRpcProvider(`https://rpc.tenderly.co/fork/${forkId}`);
  await provider.send('tenderly_setBalance', [
    votingAddress,
    ethers.utils.hexValue(ethers.utils.parseUnits('10', 'ether').toHexString()),
  ]);
  const bn = (forkResponse.data.root_transaction.receipt.blockNumber as string).replace('0x', '');
  const blockNumber: number = Number.parseInt(bn, 16);

  console.log(`fork id:      ${chalk.bgGray(forkId)}`);
  console.log(`block number: ${chalk.bgBlue(blockNumber)}`);
  console.log(`\nview simulation results here 👇`);
  console.log(chalk.greenBright(`https://dashboard.tenderly.co/${user}/${project}/fork/${forkId}`));

  const accounts = forkResponse.data.simulation_fork.accounts;
  const signers = Object.keys(accounts).map((address) => provider.getSigner(address));

  const agent = new ethers.Contract(agentAddress, abi, provider);

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

export async function simulateTransaction(
  provider: ethers.providers.JsonRpcProvider,
  config: any,
  unsignedTx: ethers.PopulatedTransaction,
) {
  return await provider.send('eth_sendTransaction', [
    {
      to: config.agentAddress,
      from: config.votingAddress,
      data: unsignedTx.data,
      gas: ethers.utils.hexValue(500000),
      gasPrice: ethers.utils.hexValue(1),
      value: ethers.utils.hexValue(0),
    },
  ]);
}

export const tenderlyProjectUrl = () =>
  `account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`;

export const tenderlyProjectOperation = (...path: any[]) =>
  [`account/${process.env.TENDERLY_USER}/project/${process.env.TENDERLY_PROJECT}`, ...path]
    .join('/')
    .replace('//', '');
