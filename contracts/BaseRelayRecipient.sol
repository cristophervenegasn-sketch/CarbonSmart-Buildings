// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title BaseRelayRecipient
 * @dev Base contract for meta-transaction support (gas relay)
 */
abstract contract BaseRelayRecipient {
    address private _trustedForwarder;

    function _setTrustedForwarder(address forwarder) internal {
        _trustedForwarder = forwarder;
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
