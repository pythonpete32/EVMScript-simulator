import { createBatchCallScript } from './lib/aragon';
import { forkForCli, simulateTransaction } from './lib/tenderly/fork';
import { tenderlyPrompt, daoPrompt, moreTxPrompt, transactionPrompt } from './lib/cli/prompts';

async function main() {
  const transactions = [];
  const config = {
    ...(await tenderlyPrompt()),
    ...(await daoPrompt()),
  };

  let moreTransactions = true;
  while (moreTransactions) {
    transactions.push(await transactionPrompt());
    moreTransactions = await moreTxPrompt();
  }
  console.table({ ...config, tenderlyKey: '**********' });
  console.table(transactions);

  const { agent, provider } = await forkForCli(config);
  const evmScript = createBatchCallScript(transactions);
  const unsignedTx = await agent.populateTransaction.forward(evmScript);
  await simulateTransaction(provider, config, unsignedTx);
}

main();
