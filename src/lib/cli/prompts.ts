import { prompt } from 'enquirer';
import { Interface } from 'ethers/lib/utils';

export async function tenderlyPrompt() {
  const response: any = await prompt([
    {
      type: 'form',
      name: 'name',
      message: '1. Configure Tenderly:',
      choices: [
        { name: 'project', message: 'Tenderly Project   ' },
        { name: 'user', message: 'Tenderly Username  ' },
        { name: 'tenderlyKey', message: 'Tenderly Access Key' },
      ],
    },
  ]);
  return { ...response.name };
}
export async function daoPrompt() {
  const response: any = await prompt([
    {
      type: 'form',
      name: 'name',
      message: '2. Configure Aragon:',
      choices: [
        {
          name: 'agentAddress',
          message: 'Agent Address   ',
          // initial: '0x336252602b3a8a0be336ed942228305173e8082b' as string,
        },
        {
          name: 'votingAddress',
          message: 'Voting Address  ',
          // initial: '0x92462953792d3e84af56edfc74d93e5885d38cc0',
        },
      ],
    },
  ]);
  return { ...response.name };
}

export async function functionArgsPrompt(contract: Interface, func: string) {
  return Object.values(
    await prompt(
      contract.functions[func].inputs.map((i, index) => {
        return {
          type: 'input',
          name: index.toString(),
          message: `${i.name || index}: ${i.type}`,
        };
      }),
    ),
  );
}

export async function contractAddressPrompt() {
  const address: { name: string } = await prompt({
    type: 'input',
    name: 'name',
    message: 'Enter Contract Address:',
  });

  return address.name;
}

export async function functionSelectPrompt(contract: Interface) {
  const names = Object.keys(contract.functions);
  const func: { name: string } = await prompt({
    type: 'autocomplete',
    name: 'name',
    message: 'Select a function',
    // limit: 10,
    initial: 2,
    choices: names,
  });
  return func.name;
}

export async function anotherTransactionPrompt() {
  const response: { name: boolean } = await prompt({
    type: 'confirm',
    name: 'name',
    message: 'Add another transaction?',
  });
  return response.name;
}
