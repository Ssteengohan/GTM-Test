document
  .getElementById("connect-trustwallet")
  .addEventListener("click", function () {
 

    const trustWalletLink = `https://link.trustwallet.com/open_url?coin_id=60&url=${dappUrl}`;
    window.location = trustWalletLink;
  });
let web3;

async function connectWallet() {
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