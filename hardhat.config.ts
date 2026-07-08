import type { HardhatUserConfig } from "hardhat/config";
import { configVariable } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox-mocha-ethers";

const config: HardhatUserConfig = {
  solidity: {
    profiles: {
      default: {
        version: "0.8.28",
      },
      production: {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    lacnet: {
      type: "http",
      chainType: "l1",
      url: configVariable("LACNET_RPC_URL || http://35.193.217.67"),
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;
