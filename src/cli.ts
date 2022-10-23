// 9. ask if more transactions
// 10. if yes then repeat 3-9
// 11. if no then create the batch call script
// 12. get the unsigned transaction
// 13. send the transaction
// 14. get the transaction hash
// 15. print the transaction hash
// 16. exit

import { createBatchCallScript } from '@lib/aragon';
import { getInterfaceFromEtherscan } from '@lib/cli/helpers';
import { forkForCli } from '@lib/tenderly/fork';
import { ethers } from 'ethers';
import { Interface } from 'ethers/lib/utils';
import {
  tenderlyPrompt,
  daoPrompt,
  contractAddressPrompt,
  functionArgsPrompt,
  functionSelectPrompt,
  anotherTransactionPrompt,
} from './lib/cli/prompts';
async function main() {
  const transactions = [];
  const config = {
    ...(await tenderlyPrompt()),
    ...(await daoPrompt()),
  };

  console.log(config);

  let moreTransactions = true;
  while (moreTransactions) {
    transactions.push(await transactionPrompt());
    moreTransactions = await anotherTransactionPrompt();
  }
  console.log(transactions);
  const { agent, provider } = await forkForCli(config);
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

async function transactionPrompt() {
  const contractAddress: string = await contractAddressPrompt();
  const iface: Interface = await getInterfaceFromEtherscan(contractAddress);
  const func: string = await functionSelectPrompt(iface);

  const txArgs = await functionArgsPrompt(iface, func);
  console.log('txArgs', txArgs);

  return {
    to: contractAddress,
    signature: func,
    args: txArgs,
  };
}

main();
