// Function to construct Trust Wallet Direct Link
function getTrustWalletDirectLink() {
  const dappUrl = "https://link.trustwallet.com/browser_enable";
  return dappUrl;
}

// Function to update the wallet status in UI
function updateWalletStatus(message) {
  document.getElementById("walletStatus").innerText = message;
}

// Event listener for the TrustWallet connection
document
  .getElementById("connect-trustwallet")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action

    // Call the function to connect the wallet
    connectWallet();
  });

// Async function to connect to the Ethereum wallet
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      alert("Connected account: " + account);
      updateWalletStatus(`Connected: ${account}`);
    } catch (error) {
    }
  } else {
    // Prompt the user to open Trust Wallet app or install the browser extension

    updateWalletStatus("Trust Wallet not detected");
  }
}
