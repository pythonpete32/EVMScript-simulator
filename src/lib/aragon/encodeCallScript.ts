import { utils } from "ethers";
import { CallScriptAction } from "@type/index";

export default function encodeCallScript(actions: CallScriptAction[]): string {
  const CALLSCRIPT_ID = "0x00000001";
  return actions.reduce((script: string, { to, data }: any) => {
    const address = utils.defaultAbiCoder.encode(["address"], [to]);
    const dataLength = utils.defaultAbiCoder.encode(
      ["uint256"],
      [(data.length - 2) / 2]
    );

    return script + address.slice(26) + dataLength.slice(58) + data.slice(2);
  }, CALLSCRIPT_ID);
}
