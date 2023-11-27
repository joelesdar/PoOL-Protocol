// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LearningTracker is ERC1155, Ownable {
    // ID de token para rastrear los diferentes logros o lecciones
    uint256 public constant TASK_WATCHED = 1;
    uint256 public constant QUIZ_COMPLETED = 2;
    // Otros IDs de tokens pueden ir aquí...

    constructor() ERC1155("https://yourapi.com/metadata/{id}.json") {}

    function claimReward(uint256 tokenId, uint256 amount) public {
        require(tokenId == TASK_WATCHED || tokenId == QUIZ_COMPLETED, "Invalid token ID");
        _mint(msg.sender, tokenId, amount, "");
    }

    // Función para actualizar la URI de los metadatos (si es necesario)
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    // Puedes agregar más lógica aquí

    //
}
