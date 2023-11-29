// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LearningTracker is ERC1155, Ownable {
    uint256 public nextTokenId;

    event RewardClaimed(address indexed student, uint256 tokenId);

    constructor() ERC1155("") {
        nextTokenId = 1;
    }

    function claimReward() public {
        uint256 currentId = nextTokenId;
        _mint(msg.sender, currentId, 1, "");
        nextTokenId++;

        emit RewardClaimed(msg.sender, currentId);
    }

    // Otras funciones y lógicas pueden ser añadidas aquí
}
