// Function to construct Trust Wallet Link
function getTrustWalletLink() {
  const dappUrl = `https://${document.URL.replace(/https?:\/\//i, "")}`;
  return `https://link.trustwallet.com/open_url?coin_id=60&url=${dappUrl}`;
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

    // Attempt to open the Trust Wallet app directly
    const trustWalletLink = getTrustWalletLink();
    window.location.href = trustWalletLink;
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
      alert("User denied account access");
      updateWalletStatus("Connection failed: User denied account access");
    }
  } else {
    alert("Non-Ethereum browser detected. Consider installing Trust Wallet!");
    updateWalletStatus("Non-Ethereum browser detected");
  }
}
