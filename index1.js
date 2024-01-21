document
  .getElementById("connect-trustwallet")
  .addEventListener("click", function () {
    connectWallet();
  });

let web3;

async function connectWallet() {
  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile logic: Use Trust Wallet deep link to open your DApp in the Trust Wallet browser
    const dappUrl = "https://gleaming-kulfi-029c98.netlify.app/"; // Replace with your DApp's URL
    const trustWalletLink = `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(
      dappUrl
    )}`;
    window.location.href = trustWalletLink;
  } else {
    // Desktop logic: Standard Ethereum request
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        // Optionally, update the UI element with the account address or status
        document.getElementById(
          "walletStatus"
        ).innerText = `Connected: ${account}`;
      } catch (error) {
        // Optionally, update the UI with the error message
        document.getElementById("walletStatus").innerText =
          "Connection failed: User denied account access";
      }
    } else {
      // Optionally, update the UI with the message
      document.getElementById("walletStatus").innerText =
        "Non-Ethereum browser detected";
    }
  }
}