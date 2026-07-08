// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

/**
 * @title BaseRelayRecipient
 * @dev Base contract for meta-transaction support (gas relay)
 * Allows contracts to work with gas relay services via a trusted forwarder
 */
abstract contract BaseRelayRecipient {
    address private _trustedForwarder;

    event TrustedForwarderChanged(address indexed oldForwarder, address indexed newForwarder);

    function _setTrustedForwarder(address forwarder) internal {
        require(forwarder != address(0), "Invalid forwarder address");
        address oldForwarder = _trustedForwarder;
        _trustedForwarder = forwarder;
        if (oldForwarder != address(0)) {
            emit TrustedForwarderChanged(oldForwarder, forwarder);
        }
    }

    function getTrustedForwarder() external view returns (address) {
        return _trustedForwarder;
    }

    function _msgSender() internal view virtual returns (address sender) {
        if (msg.sender == _trustedForwarder) {
            // Extract the address from the end of msg.data
            assembly {
                sender := shr(96, calldataload(sub(calldatasize(), 20)))
            }
        } else {
            sender = msg.sender;
        }
    }
}
