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

    // Use the direct Trust Wallet link
    const trustWalletDirectLink = getTrustWalletDirectLink();

    // Open the link in a new tab
    window.open(trustWalletDirectLink, "_blank");
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