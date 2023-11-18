import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "MintNFT",
    functionName: "add",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });
  const { data: counter } = useScaffoldContractRead({
    contractName: "MintNFT",
    functionName: "getCounter",
  });

  return (
    <>
      <h2>User</h2>
      <p>{address}</p>
      <button className="btn btn-primary" onClick={() => writeAsync()}>
        Send TX
      </button>
      <p>{counter}</p>
    </>
  );
};

export default Home;
