// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CarbonSmartToken.sol";

contract EnergyRewardManager {
    CarbonSmartToken public token;
    address public oracle;

    event RewardIssued(address indexed building, uint256 amount);

    constructor(address _token, address _oracle) {
        token = CarbonSmartToken(_token);
        oracle = _oracle;
    }

    function issueReward(address building, uint256 amount) external {
        require(msg.sender == oracle, "Only oracle can issue rewards");
        token.mint(building, amount);
        emit RewardIssued(building, amount);
    }
}
