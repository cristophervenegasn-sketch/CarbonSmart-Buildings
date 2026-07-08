````markdown
# CarbonSmart Buildings 🌍💚

**Green Carbon Token Smart Contracts for the Carbon Hackathon**

A comprehensive blockchain solution for tracking and rewarding sustainable building practices through smart contracts on the LACNet network.

## 📋 Project Overview

CarbonSmart Buildings is a decentralized platform that:
- Issues **Green Carbon Tokens (GCT)** to buildings based on energy efficiency
- Manages reward distribution through an **EnergyRewardManager**
- Supports **gas relay** transactions for better UX
- Integrates with **LACNet**, a sustainable blockchain network for Latin America

## 🏗️ Architecture

### Smart Contracts

#### 1. **CarbonSmartToken** (`contracts/CarbonSmartToken.sol`)
- ERC20 token implementation
- Admin-controlled minting
- Meta-transaction support (gas relay)
- Manages GCT token supply and transfers

#### 2. **EnergyRewardManager** (`contracts/EnergyRewardManager.sol`)
- Issues rewards to buildings
- Oracle-controlled reward distribution
- Validates building addresses and amounts
- Emits reward events for tracking

#### 3. **BaseRelayRecipient** (`contracts/BaseRelayRecipient.sol`)
- Gas relay recipient contract
- Supports meta-transactions via trusted forwarder
- Extracts actual sender from relay data

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Private key for deployment (set in `.env`)

### Installation

```bash
# Clone the repository
git clone https://github.com/cristophervenegasn-sketch/CarbonSmart-Buildings.git
cd CarbonSmart-Buildings

# Install dependencies
npm install
```

### Environment Setup

```bash
# Copy example environment
cp .env.example .env

# Edit .env and add your private key
nano .env
```

### Compilation

```bash
npm run compile
```

### Testing

```bash
npm run test
```

### Deployment

**Local Hardhat Network:**
```bash
npm run local-deploy
```

**LACNet Network:**
```bash
npm run deploy
```

## 📦 Project Structure

```
CarbonSmart-Buildings/
├── contracts/
│   ├── CarbonSmartToken.sol          # ERC20 token contract
│   ├── EnergyRewardManager.sol       # Reward distribution manager
│   └── BaseRelayRecipient.sol        # Gas relay support
├── scripts/
│   └── deploy.ts                     # Deployment script
├── tests/
│   ├── test_token.js                 # Token tests
│   └── test_rewards.js               # Reward manager tests
├── hardhat.config.ts                 # Hardhat configuration
├── package.json                      # Project dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## 🔧 Configuration

### Hardhat Config (`hardhat.config.ts`)
- **Solidity Version**: 0.8.28
- **Optimizer**: Enabled (200 runs)
- **Networks**: 
  - Hardhat (local)
  - LACNet (production)

### Dependencies
- `ethers`: ^6.15.0
- `@lacchain/gas-model-provider`: ^1.2.1
- `@nomicfoundation/hardhat-toolbox-mocha-ethers`: ^3.0.0
- `@openzeppelin/contracts`: ^4.9.0

## 📝 Contract Functions

### CarbonSmartToken
```solidity
mint(address to, uint256 amount) - Mint tokens (admin only)
setAdmin(address newAdmin) - Transfer admin role
```

### EnergyRewardManager
```solidity
issueReward(address building, uint256 amount) - Issue reward (oracle only)
setOracle(address newOracle) - Change oracle address
```

## 🧪 Testing

Run all tests:
```bash
npm run test
```

Run specific test file:
```bash
npx hardhat test tests/test_token.js
```

## 📊 Example Usage

### Deploy Contracts
```typescript
const token = await Token.deploy(deployer.address);
const manager = await Manager.deploy(token.address, oracle.address);
```

### Issue Rewards
```typescript
const rewardAmount = ethers.utils.parseEther("100");
await manager.connect(oracle).issueReward(building.address, rewardAmount);
```

## 🌐 LACNet Integration

### Network Details
- **RPC Endpoint**: http://35.193.217.67
- **Chain Type**: L1
- **Gas Model**: LACChain gas relay support

### Environment Variables
```
LACNET_RPC_URL=http://35.193.217.67
PRIVATE_KEY=your_private_key_here
```

## 🔐 Security Considerations

- ✅ Admin and Oracle role-based access control
- ✅ Input validation for addresses and amounts
- ✅ Gas relay support for improved UX
- ✅ Event logging for all transactions
- ⚠️ Contracts are for hackathon demonstration (not audited)

## 📚 Documentation

- [LACNet Documentation](https://lacnet.com/docs)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [Hardhat Documentation](https://hardhat.org/docs)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Authors

- **Cristopher Venegas** - Initial implementation for Carbon Hackathon

## 🙏 Acknowledgments

- LACNet team for the sustainable blockchain infrastructure
- OpenZeppelin for secure smart contract libraries
- Hardhat team for excellent development tools

---

**Built for the Carbon Hackathon** ♻️🌱

For more information visit: [https://github.com/cristophervenegasn-sketch/CarbonSmart-Buildings](https://github.com/cristophervenegasn-sketch/CarbonSmart-Buildings)
````
