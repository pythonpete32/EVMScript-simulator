import { Address, TxSettings } from "@type/index";
import createCallScript from "./createCallScript";

export default function createVoteScript(
  votingAddress: Address,
  metadata: string,
  txSettings: TxSettings
) {
  const targetScript = createCallScript(txSettings);
  const voteScript = createCallScript({
    to: votingAddress,
    signature: "newVote(bytes,string,bool,bool)",
    args: [targetScript, metadata, true, false],
  });
  return voteScript;
}
