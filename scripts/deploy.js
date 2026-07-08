const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy CarbonSmartToken
  const Token = await ethers.getContractFactory("CarbonSmartToken");
  const token = await Token.deploy("0xTrustedForwarderAddressHere");
  await token.deployed();
  console.log("CarbonSmartToken deployed to:", token.address);

  // Deploy EnergyRewardManager
  const Manager = await ethers.getContractFactory("EnergyRewardManager");
  const manager = await Manager.deploy(token.address, deployer.address);
  await manager.deployed();
  console.log("EnergyRewardManager deployed to:", manager.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
