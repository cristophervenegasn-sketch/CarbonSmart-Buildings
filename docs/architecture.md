# CarbonSmart Buildings - Architecture

## System Overview

CarbonSmart Buildings is a blockchain-based system for issuing and managing Green Carbon Tokens (GCT) based on verified energy savings in buildings.

## Smart Contracts

### 1. CarbonSmartToken (ERC20)
- **Purpose**: Represents verified CO₂ reductions as transferable tokens
- **Key Features**:
  - ERC20 standard for token transfers
  - Mint function restricted to admin
  - Gas relay support via BaseRelayRecipient
  - Initial supply: 1000 GCT tokens

**Functions**:
- `mint(address to, uint256 amount)`: Mint new tokens (admin only)
- `transfer(address to, uint256 amount)`: Transfer tokens (ERC20 standard)

### 2. EnergyRewardManager
- **Purpose**: Manages the issuance of rewards for verified energy savings
- **Key Features**:
  - Connects to CarbonSmartToken contract
  - Oracle-based reward issuance
  - Event emission for reward tracking

**Functions**:
- `issueReward(address building, uint256 amount)`: Issue tokens for verified savings (oracle only)

**Events**:
- `RewardIssued(address indexed building, uint256 amount)`: Emitted when rewards are issued

### 3. BaseRelayRecipient
- **Purpose**: Enables meta-transactions (gas relay) for gas-free operations
- **Key Features**:
  - Abstract contract for inheritance
  - Trusted forwarder pattern
  - `_msgSender()` override for relay compatibility

## Data Flow

```
IoT Sensors / AI System
    ↓
Oracle Validation
    ↓
EnergyRewardManager.issueReward()
    ↓
CarbonSmartToken.mint()
    ↓
Building Receives GCT Tokens
```

## Gas Relay Flow

```
User/Building (no ETH needed)
    ↓
Meta-transaction via Forwarder
    ↓
BaseRelayRecipient._msgSender()
    ↓
Smart Contract executes with original sender
    ↓
Forwarder pays gas (LACNet Gas Model)
```

## Deployment Architecture

- **Network**: LACNet Hackathon
- **RPC Endpoint**: `http://35.193.217.67`
- **Framework**: Hardhat 3
- **Language**: Solidity 0.8.20

## Security Considerations

1. **Admin Controls**: Only the admin can mint new tokens
2. **Oracle Trust**: Only the oracle can issue rewards
3. **Trusted Forwarder**: Only trusted forwarders can relay transactions
4. **Input Validation**: Require statements ensure proper authorization

## Future Enhancements

- Implement access control roles (OpenZeppelin AccessControl)
- Add staking and governance mechanisms
- Integrate real-time IoT data feeds
- Implement token burning for retirement
- Add multi-signature admin controls
