import config from './config';
// import { forkForTest } from './lib/tenderly/fork';
import { createBatchCallScript } from './lib/aragon';
import * as dotenv from 'dotenv';
import { ContractReceipt, ethers } from 'ethers';
import abi from './abis/voting';
dotenv.config();

async function run() {
  // 0. get connect to frame
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:1248');
  const signer = provider.getSigner(0);
  console.log('signer address', await signer.getAddress());

  // 1. create the callscript
  const evmScript = createBatchCallScript(config.transactions);

  // 2. create the transaction
  const voting = new ethers.Contract(config.voting, abi, signer);
  const tx = await voting.newVote(evmScript, 'metadata');
  const receipt: ContractReceipt = await tx.wait();
  console.log('receipt', receipt.transactionHash);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
