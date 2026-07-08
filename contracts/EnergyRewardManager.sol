// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./CarbonSmartToken.sol";

contract EnergyRewardManager {
    CarbonSmartToken public token;
    address public oracle;

    event RewardIssued(address indexed building, uint256 amount);
    event OracleChanged(address indexed oldOracle, address indexed newOracle);

    constructor(address _token, address _oracle) {
        require(_token != address(0), "Invalid token address");
        require(_oracle != address(0), "Invalid oracle address");
        token = CarbonSmartToken(_token);
        oracle = _oracle;
    }

    function issueReward(address building, uint256 amount) external {
        require(msg.sender == oracle, "Only oracle can issue rewards");
        require(building != address(0), "Invalid building address");
        require(amount > 0, "Amount must be greater than 0");
        
        token.mint(building, amount);
        emit RewardIssued(building, amount);
    }

    function setOracle(address newOracle) external {
        require(msg.sender == oracle, "Only oracle can change oracle");
        require(newOracle != address(0), "Invalid oracle address");
        address oldOracle = oracle;
        oracle = newOracle;
        emit OracleChanged(oldOracle, newOracle);
    }
}
