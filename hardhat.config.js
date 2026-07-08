require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    lacnet: {
      url: "http://35.193.217.67", // RPC hackathon node
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    hardhat: {
      chainId: 1337
    }
  }
};
