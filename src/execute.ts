import * as dotenv from 'dotenv';
import config from './config';
import { createBatchCallScript } from './lib/aragon';
import { ContractReceipt, ethers } from 'ethers';
import abi from './abis/voting';
dotenv.config();

async function run() {
  // 0. get connect to frame
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:1248');
  const signer = provider.getSigner(0);
  console.log('signer address', await signer.getAddress());

  // 1. create the voting contract instance
  const voting = new ethers.Contract(config.voting, abi, signer);

  // 2. create the callscript
  const evmScript = createBatchCallScript(config.transactions);
  console.log(`--------\n${evmScript}\n--------`);

  // 3. execute the transaction on the app
  const tx = await voting.newVote(evmScript, 'metadata');
  const receipt: ContractReceipt = await tx.wait();
  console.log('receipt', receipt.transactionHash);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
