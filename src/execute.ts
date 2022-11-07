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

  // 3. log the script for testing in tenderly
  console.log(`--------\n${voteScript}\n--------`);

  // 4. create contract instance
  const voting = new ethers.Contract(config.voting, VOTING_ABI, signer);
  const tx = await voting.newVote(voteScript, 'metadata', true, true);
  console.log('tx hash', tx.hash);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
