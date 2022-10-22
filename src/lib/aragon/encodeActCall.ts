import { utils } from "ethers";

export default function encodeActCall(
  signature: string,
  params: any[] = []
): string {
  const sigBytes = utils.hexDataSlice(utils.id(signature), 0, 4);
  const types = signature.replace(")", "").split("(")[1];

  // No params, return signature directly
  if (types === "") {
    return sigBytes;
  }

  const paramBytes = new utils.AbiCoder().encode(types.split(","), params);

  return `${sigBytes}${paramBytes.slice(2)}`;
}
