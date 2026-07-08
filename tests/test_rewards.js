const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnergyRewardManager", function () {
  let token;
  let manager;
  let owner;
  let oracle;
  let building1;
  let building2;

  beforeEach(async function () {
    [owner, oracle, building1, building2] = await ethers.getSigners();

    // Deploy CarbonSmartToken
    const Token = await ethers.getContractFactory("CarbonSmartToken");
    token = await Token.deploy(owner.address);
    await token.deployed();

    // Deploy EnergyRewardManager
    const Manager = await ethers.getContractFactory("EnergyRewardManager");
    manager = await Manager.deploy(token.address, oracle.address);
    await manager.deployed();

    // Set manager as admin to allow minting
    await token.mint(manager.address, ethers.utils.parseEther("10000"));
  });

  describe("Deployment", function () {
    it("Should set the correct token address", async function () {
      expect(await manager.token()).to.equal(token.address);
    });

    it("Should set the correct oracle address", async function () {
      expect(await manager.oracle()).to.equal(oracle.address);
    });
  });

  describe("Reward Issuance", function () {
    it("Should allow oracle to issue rewards", async function () {
      const rewardAmount = ethers.utils.parseEther("100");
      await manager.connect(oracle).issueReward(building1.address, rewardAmount);
      expect(await token.balanceOf(building1.address)).to.equal(rewardAmount);
    });

    it("Should emit RewardIssued event", async function () {
      const rewardAmount = ethers.utils.parseEther("100");
      await expect(
        manager.connect(oracle).issueReward(building1.address, rewardAmount)
      ).to.emit(manager, "RewardIssued").withArgs(building1.address, rewardAmount);
    });

    it("Should not allow non-oracle to issue rewards", async function () {
      const rewardAmount = ethers.utils.parseEther("100");
      await expect(
        manager.connect(building1).issueReward(building2.address, rewardAmount)
      ).to.be.revertedWith("Only oracle can issue rewards");
    });

    it("Should issue multiple rewards to different buildings", async function () {
      const rewardAmount1 = ethers.utils.parseEther("100");
      const rewardAmount2 = ethers.utils.parseEther("200");

      await manager.connect(oracle).issueReward(building1.address, rewardAmount1);
      await manager.connect(oracle).issueReward(building2.address, rewardAmount2);

      expect(await token.balanceOf(building1.address)).to.equal(rewardAmount1);
      expect(await token.balanceOf(building2.address)).to.equal(rewardAmount2);
    });
  });
});
