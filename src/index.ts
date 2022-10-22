import config from './config';
import { forkForTest } from './lib/tenderly/fork';
import { createBatchCallScript } from './lib/aragon';
import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
dotenv.config();

async function run() {
  const { agent, provider } = await forkForTest();
  const evmScript = createBatchCallScript(config.transactions);
  const unsignedTx = await agent.populateTransaction.forward(evmScript);
  const txHash = await provider.send('eth_sendTransaction', [
    {
      to: config.agent,
      from: config.voting,
      data: unsignedTx.data,
      gas: ethers.utils.hexValue(500000),
      gasPrice: ethers.utils.hexValue(1),
      value: ethers.utils.hexValue(0),
    },
  ]);
  console.log(txHash);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
