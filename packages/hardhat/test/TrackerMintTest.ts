const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LearningTracker Contract", function () {
  it("Should mint an NFT to the student and print a success message", async function () {
    const LearningTracker = await ethers.getContractFactory("LearningTracker");
    const learningTracker = await LearningTracker.deploy();
    await learningTracker.deployed();

    const student = (await ethers.getSigners())[1]; // Segundo signer como el estudiante

    // Llamada a la función claimReward y captura del evento
    const tx = await learningTracker.connect(student).claimReward();

    // Captura del evento y visualización del mensaje
    const receipt = await tx.wait();
    const rewardClaimedEvent = receipt.events.find(event => event.event === 'RewardClaimed');
    if (rewardClaimedEvent) {
      const { student, tokenId } = rewardClaimedEvent.args;
      console.log(`Felicidades ${student} ha recibido su recompensa NFT con ID: ${tokenId}`);
    }

    // Verificaciones adicionales...
  });
});
