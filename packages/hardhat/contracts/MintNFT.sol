//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract MintNFT {
	address public prueba = 0xA8c3FA5A3796BF0C3900E55469B1C6d77070143A;
	uint8 public counter = 0;

	function getMyAddress() public view returns (address) {
		return prueba;
	} 

	function add() public {
			counter++;
  }

	function getCounter() public view returns (uint8) {
		return counter;
	}
}
