import './App.css';
import Web3Modal from "web3modal";
import (ethers) from "ethers";

const providerOptions = {
  }
  function App() {
 async function connectWallet() {
 try {
 let web3Modal = new Web3Modal( opts: {
            cacheProvider: false,
            providerOptions,
          });
          const web3ModalInstance = await web3Modal.connect();
          const web3ModalProvider = new ethers.providers.Web3Provider (web3Modal Instance);
          console.log (web3ModalProvider);
        }catch(error) {
          console.error(error);
}
 }
    return (
<div className="App">
 <header className="App-header">
            <h1>Web3Modal Connection!</h1>
 <button onClick={connectWallet}>
                Connect Wallet
            </button>
 </header>
        </div>
    );
  }

export default App;
