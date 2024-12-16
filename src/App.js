import logo from './logo.svg';
import './App.css';
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { toast, Toaster } from 'react-hot-toast';
import { ethers } from "ethers";

function App() {

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider, walletProviderType } = useWeb3ModalProvider();

  const confirm = async () => {
    try {
      window.open('http://localhost:3000/redirect', '_blank');
    } catch (error) {
      console.error("error", error)
    }
    // try {
    //   if (!address) {
    //     toast.error("Please connect the wallet.");
    //     return false;
    //   }

    //   // Amount in MATIC for Polygon Network
    //   const AmountInMATIC = 0.1;

    //   // Create a provider connected to the Polygon network
    //   const provider = new ethers.providers.Web3Provider(walletProvider);
    //   const signer = provider.getSigner();

    //   // Convert the amount to the appropriate units
    //   const TransferAmount = ethers.utils.parseUnits(AmountInMATIC.toFixed(8).toString(), "ether");

    //   // Initiate the transfer
    //   const transferTransaction = await signer.sendTransaction({
    //     to: address, // Replace this with the recipient's address
    //     value: TransferAmount,
    //   });

    //   // Wait for the transaction to be mined
    //   const result = await transferTransaction.wait();
    //   console.log("Transaction Successful:", result);

    //   toast.success("Transaction completed successfully!");

    // } catch (error) {
    //   console.error("Error during the transaction:", error);
    //   toast.error("Transaction failed. Check the console for details.");
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <w3m-button /> */}
        <br />
        <button onClick={confirm} className="border rounded-lg p-5">Subscribe</button>
        <br />
        <Toaster />
      </header>
    </div>
  );
}

export default App;
