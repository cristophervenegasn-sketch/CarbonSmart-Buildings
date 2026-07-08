# 🌱 CarbonSmart Buildings

A Hardhat-based smart contract project built for the Carbon Hackathon, featuring integration with LACNet blockchain network. This project demonstrates a programmable Green Carbon Token contract with gas relay functionality using the LacChain Gas Model Provider.

## 📋 Project Overview

CarbonSmart Buildings provides a comprehensive solution for issuing and managing Green Carbon Tokens (GCT) based on verified energy savings in buildings.

### Key Features

- **CarbonSmartToken Contract**: ERC20-compatible token representing verified CO₂ reductions
- **EnergyRewardManager Contract**: Issues tokens when IoT + AI verification confirms energy savings
- **Gas Relay Integration**: Uses BaseRelayRecipient for meta-transactions and gas-free operations
- **LACNet Integration**: Configured for deployment on LACNet hackathon network
- **TypeScript Support**: Full TypeScript integration with Hardhat
- **Modern Hardhat 3**: Uses the latest Hardhat features

## 🏗️ Project Structure

```
CarbonSmart-Buildings/
├── contracts/
│   ├── CarbonSmartToken.sol        # Green Carbon Token contract (ERC20)
│   ├── EnergyRewardManager.sol     # Token issuance manager
│   └── BaseRelayRecipient.sol      # Gas relay base contract
├── scripts/
│   └── deploy.js                   # LACNet deployment script
├── docs/
│   ├── deployment_guide.md         # Step-by-step deployment guide
│   └── architecture.md             # Technical architecture overview
├── hardhat.config.js               # Hardhat configuration
├── package.json                    # Project dependencies
├── .env.example                    # Environment variables template
└── README.md                       # This file
```

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/cristophervenegasn-sketch/CarbonSmart-Buildings.git
cd CarbonSmart-Buildings

# Install dependencies
npm install
```

### 2. Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your PRIVATE_KEY
nano .env
```

### 3. Compile Contracts

```bash
npm run compile
```

### 4. Deploy to LACNet

```bash
npm run deploy
```

## 📡 Network Configuration

The project is pre-configured for LACNet:

| Network | RPC URL | Chain ID |
|---------|---------|----------|
| LACNet Hackathon | http://35.193.217.67 | TBD |
| Local Hardhat | http://127.0.0.1:8545 | 1337 |

## 💡 Smart Contracts

### CarbonSmartToken
- Standard ERC20 token for representing CO₂ reductions
- Mintable by admin
- Gas relay support for meta-transactions

### EnergyRewardManager
- Connects IoT sensor data via Oracle
- Validates energy reduction against baseline
- Calls CarbonSmartToken to mint Green Carbon Tokens
- Ensures only authorized providers can issue rewards

### BaseRelayRecipient
- Enables gas-free meta-transactions
- Uses trusted forwarder pattern
- Compatible with LACNet Gas Model Provider

## 🔒 Security Considerations

⚠️ **Important Security Notes:**

- Never hardcode private keys in production
- Use environment variables for sensitive data
- Always audit contracts before mainnet deployment
- For production, use hardware wallets or secure key management
- Test thoroughly on testnet before mainnet deployment

## 📚 Documentation

- **[Deployment Guide](docs/deployment_guide.md)** - Step-by-step deployment instructions
- **[Architecture Guide](docs/architecture.md)** - Technical architecture and data flows

## 🛠️ Development

### Available Scripts

```bash
npm run compile      # Compile smart contracts
npm run deploy       # Deploy to LACNet
npm run test         # Run tests
npm run local-deploy # Deploy to local Hardhat network
```

## 📦 Technology Stack

- **Hardhat 3 Beta** - Smart contract development framework
- **Solidity 0.8.20** - Smart contract language
- **OpenZeppelin Contracts** - Secure smart contract libraries
- **Ethers.js v6** - Ethereum library
- **Node.js** - JavaScript runtime

## 🤝 Contributing

This is a hackathon project. Feel free to fork and experiment!

## 📄 License

MIT License – Knowledge generated is a public good, fostering positive externalities in the innovation ecosystem.

---

**Built for the Carbon Hackathon 🌍**

For questions or support, visit the [LACNet Documentation](https://lacnet.lacchain.net)
