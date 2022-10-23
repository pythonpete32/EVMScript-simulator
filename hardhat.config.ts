import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-network-helpers";

const config: HardhatUserConfig = {
  defaultNetwork: "frame",
  networks: {
    frame: {
      httpHeaders: { origin: "daobox" },
      url: "http://localhost:1248",
    },
  },
};

export default config;
