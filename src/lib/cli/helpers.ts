import * as dotenv from 'dotenv';
import { ethers } from 'ethers';
import axios from 'axios';
import { Address } from '@type/index';

dotenv.config();

const getAbi = async (address: Address) => {
  try {
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response: any = await axios.get(url);
    if (response.data.status === '0') throw new Error('CONTRACT ERROR ', response.data);
    return JSON.parse(response.data.result);
  } catch (error) {
    console.error('AXIOS ERROR ', error);
  }
};

const getInterfaceFromEtherscan = async (address: Address) => {
  const abi = await getAbi(address);
  return new ethers.utils.Interface(abi);
};

export { getInterfaceFromEtherscan, getAbi };
