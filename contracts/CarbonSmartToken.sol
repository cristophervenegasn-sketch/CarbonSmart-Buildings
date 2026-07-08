// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./BaseRelayRecipient.sol";

contract CarbonSmartToken is ERC20, BaseRelayRecipient {
    address public admin;

    constructor(address _trustedForwarder) ERC20("Green Carbon Token", "GCT") {
        admin = msg.sender;
        _setTrustedForwarder(_trustedForwarder);
        _mint(msg.sender, 1000 * 10 ** decimals()); // Initial supply
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "Only admin can mint");
        _mint(to, amount);
    }

    function _msgSender() internal view override returns (address sender) {
        return BaseRelayRecipient._msgSender();
    }
}
