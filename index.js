document
  .getElementById("connect-trustwallet")
  .addEventListener("click", function () {
    connectWallet();
  });

let web3;

function isTrustWalletBrowser() {
  return navigator.userAgent.includes("Trust");
}

function toggleVisibility(elementId, isVisible) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = isVisible ? "block" : "none";
  }
}

async function connectWallet() {
  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Toggle visibility of the <p> tag based on Trust Wallet browser check
  toggleVisibility("wallet-address", isTrustWalletBrowser());

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
          "wallet-address"
        ).innerText = `Connected: ${account}`;
      } catch (error) {
        // Optionally, update the UI with the error message
        document.getElementById("wallet-address").innerText =
          "Connection failed: User denied account access";
      }
    } else {
      // Optionally, update the UI with the message
      document.getElementById("wallet-address").innerText =
        "Non-Ethereum browser detected";
    }
  }
}

// Run the Trust Wallet browser check immediately on page load
document.addEventListener("DOMContentLoaded", (event) => {
  toggleVisibility("wallet-address", isTrustWalletBrowser());
});
