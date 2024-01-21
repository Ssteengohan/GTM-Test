async function connectWallet() {
  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile logic: Use Trust Wallet deep link
    // Redirect the user to enable the DApp browser in Trust Wallet
    window.location.href = "https://link.trustwallet.com/browser_enable";
  } else {
    // Desktop logic: Standard Ethereum request
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
      } catch (err) {
        console.error(err);
      }
    } else {
      // Handle case where Ethereum provider is not available
      alert(
        "Please install a web3 wallet (like MetaMask) to use this feature."
      );
    }
  }
}