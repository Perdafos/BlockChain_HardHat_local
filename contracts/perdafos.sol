// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Perdafos {
    string public textRaw;
    address private owner;
    uint256 public angka;

    constructor(){
        owner = msg.sender;
    }

    function setText(string calldata _text) external {
        textRaw = _text;
    }

    function inc() external {
        require(msg.sender == owner,"You are not the owner");

        angka++;
    }

    function getPemilik() external view returns(address) {
        return owner;
    }
}