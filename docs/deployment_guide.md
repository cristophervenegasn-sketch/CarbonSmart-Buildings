# CarbonSmart Buildings - Deployment Guide

## Prerequisites
- Node.js v16+ installed
- A wallet with LACNet test tokens
- Private key of your deployer account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/cristophervenegasn-sketch/CarbonSmart-Buildings.git
cd CarbonSmart-Buildings
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env and add your PRIVATE_KEY
```

## Compilation

Compile the smart contracts:
```bash
npm run compile
```

## Deployment to LACNet

Deploy to the LACNet hackathon network:
```bash
npm run deploy
```

This will:
1. Deploy the CarbonSmartToken contract
2. Deploy the EnergyRewardManager contract
3. Output the contract addresses

## Local Testing

To test locally without deploying:
```bash
npm run local-deploy
```

## Security Notes

⚠️ **Never share your private key!**

- Use a `.env` file to store sensitive data
- Never commit `.env` to version control
- For production, use hardware wallets or secure key management services
- Always audit contracts before mainnet deployment

## Network Configuration

The project is configured for:
- **LACNet Hackathon Network**: `http://35.193.217.67`
- **Local Hardhat**: `http://127.0.0.1:8545`

See `hardhat.config.js` for network details.
