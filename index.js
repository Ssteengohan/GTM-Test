document
  .getElementById("connect-trustwallet")
  .addEventListener("click", "trust://browser_enable");
function connectTrustWallet() {
  // Define your DApp's callback URL
  const callbackUrl = encodeURIComponent(
    "https://walletconnect-learning.vercel.app/"
  );

  // Construct the deep link URL
  const deepLinkUrl = `trust://browser_enable?url=${callbackUrl}`;

  // Redirect user to the deep link URL
  window.location.href = deepLinkUrl;
}

// Bind this function to your "Connect with Trust Wallet" button
document
  .getElementById("connect-trustwallet")
  .addEventListener("click", connectTrustWallet);

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      // Using alert to show connected account
      alert("Connected account: " + account);

      // Optionally, update the UI element with the account address or status
      document.getElementById(
        "walletStatus"
      ).innerText = `Connected: ${account}`;
    } catch (error) {
      // Alert user of the error
      alert("User denied account access");

      // Optionally, update the UI with the error message
      document.getElementById("walletStatus").innerText =
        "Connection failed: User denied account access";
    }
  } else {
    // Alert user that Ethereum object was not found
    alert("Non-Ethereum browser detected. Consider installing Trust Wallet!");

    // Optionally, update the UI with the message
    document.getElementById("walletStatus").innerText =
      "Non-Ethereum browser detected";
  }
}

connectWallet();
