import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployERC1155Contract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ERC1155Contract", {
    from: deployer,
    log: true,
    autoMine: true,
  });
};

export default deployERC1155Contract;
deployERC1155Contract.tags = ["ERC1155Contract"];