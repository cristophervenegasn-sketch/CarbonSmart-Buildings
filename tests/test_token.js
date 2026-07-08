const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CarbonSmartToken", function () {
  let token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("CarbonSmartToken");
    token = await Token.deploy(owner.address);
    await token.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await token.admin()).to.equal(owner.address);
    });

    it("Should assign the initial supply to the owner", async function () {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(ownerBalance).to.equal(1000n * 10n ** 18n);
    });

    it("Should have correct token name and symbol", async function () {
      expect(await token.name()).to.equal("Green Carbon Token");
      expect(await token.symbol()).to.equal("GCT");
    });
  });

  describe("Minting", function () {
    it("Should allow admin to mint tokens", async function () {
      const mintAmount = 100n * 10n ** 18n;
      await token.mint(addr1.address, mintAmount);
      expect(await token.balanceOf(addr1.address)).to.equal(mintAmount);
    });

    it("Should not allow non-admin to mint tokens", async function () {
      const mintAmount = 100n * 10n ** 18n;
      await expect(
        token.connect(addr1).mint(addr2.address, mintAmount)
      ).to.be.revertedWith("Only admin can mint");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const transferAmount = 100n * 10n ** 18n;
      await token.transfer(addr1.address, transferAmount);
      expect(await token.balanceOf(addr1.address)).to.equal(transferAmount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const ownerBalance = await token.balanceOf(owner.address);
      await expect(
        token.connect(addr1).transfer(owner.address, ownerBalance + 1n)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
  });
});
