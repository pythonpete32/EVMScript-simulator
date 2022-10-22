import { TxSettings } from "@type/index";
import { ethers } from "ethers";
import { FunctionFragment, Interface } from "ethers/lib/utils";
import encodeCallScript from "./encodeCallScript";

export function createCallScript({ to, signature, args }: TxSettings) {
  const targetInterface: Interface = new ethers.utils.Interface([`function ${signature}`]);
  const fragment: FunctionFragment = Object.values(targetInterface.functions)[0];
  const data: string = targetInterface.encodeFunctionData(fragment, args);
  return encodeCallScript([{ to, data }]);
}

export function createBatchCallScript(transactions: TxSettings[]) {
  return encodeCallScript(
    transactions.map(({ to, signature, args }) => {
      const targetInterface: Interface = new ethers.utils.Interface([`function ${signature}`]);
      const fragment: FunctionFragment = Object.values(targetInterface.functions)[0];
      const data: string = targetInterface.encodeFunctionData(fragment, args);
      return { to, data };
    })
  );
}
