import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy CarbonSmartToken
  const Token = await ethers.getContractFactory("CarbonSmartToken");
  const token = await Token.deploy(deployer.address);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("CarbonSmartToken deployed to:", tokenAddress);

  // Deploy EnergyRewardManager
  const Manager = await ethers.getContractFactory("EnergyRewardManager");
  const manager = await Manager.deploy(tokenAddress, deployer.address);
  await manager.waitForDeployment();
  const managerAddress = await manager.getAddress();
  console.log("EnergyRewardManager deployed to:", managerAddress);

  console.log("\n✅ Deployment successful!");
  console.log("Token Address:", tokenAddress);
  console.log("Manager Address:", managerAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
