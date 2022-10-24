import { BigNumber } from '@ethersproject/bignumber';
import { JsonRpcProvider } from '@ethersproject/providers';
import { AxiosResponse } from 'axios';
import { Contract, Signer } from 'ethers';

export type Address = string;

export type TxSettings = {
  to: Address;
  value?: number | BigNumber;
  signature: string;
  args: any[];
};

export type CallScriptAction = {
  to: string;
  data: string;
};

export type AragonTenderlyFork = {
  id: number;
  provider: JsonRpcProvider;
  blockNumber: number;
  agent: Contract;
  /**
   * map from address to given address' balance
   */
  accounts: { [key: string]: string };
  signers: Signer[];
  fork: TenderlyFork;
  removeFork: () => Promise<AxiosResponse<any, any>>;
};

export type TenderlyFork = {
  block_number?: number;
  network_id: string;
  transaction_index?: number;
  initial_balance?: number;
  chain_config?: {
    chain_id: number;
    homestead_block: number;
    dao_fork_support: boolean;
    eip_150_block: number;
    eip_150_hash: string;
    eip_155_block: number;
    eip_158_block: number;
    byzantium_block: number;
    constantinople_block: number;
    petersburg_block: number;
    istanbul_block: number;
    berlin_block: number;
  };
};

export type ForkCliProps = {
  user: string;
  project: string;
  agentAddress: string;
  votingAddress: string;
  tenderlyKey: string;
};
