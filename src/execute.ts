import config from './config';
import { createBatchCallScript, createCallScript } from './lib/aragon';
import { ethers } from 'ethers';

// abi
const VOTING_ABI = [
  'function newVote(bytes _evmScript, string _metadata, bool _castVote, bool _executesIfDecided)',
];

async function run() {
  // 0. get connect to frame
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:1248');
  const signer = provider.getSigner(0);
  console.log('signer address', await signer.getAddress());

  // 1. create the target callscript
  const agentScript = createBatchCallScript(config.transactions);

  // 2. pass it to the agent creating another callscript
  const voteScript = createCallScript({
    to: config.agent,
    signature: 'forward(bytes)',
    args: [agentScript],
  });
  
  // 3. pass it to the voting app creating another callscript
  const tmScript = createCallScript({
    to: config.voting,
    signature: 'newVote(bytes,string)',
    args: [agentScript,"NEW VOTE"],
  });

  // 4. log the script for testing in tenderly
  console.log(`--------\n${tmScript}\n--------`);

  // 5. create contract instance
  const tokenManager = new ethers.Contract(config.tokenManager, ["function forward(bytes)"], signer);
  const tx = await tokenManager.forward(tmScript);
  console.log('tx hash', tx.hash);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
