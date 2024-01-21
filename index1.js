async function connectWallet() {
  // Check if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile logic: Use Trust Wallet deep link to open your DApp in the Trust Wallet browser
    const dappUrl = "https://gleaming-kulfi-029c98.netlify.app/"; // Replace with your DApp's URL
    const deepLink = `https://link.trustwallet.com/open_url?coin_id=60&url=${encodeURIComponent(
      dappUrl
    )}`;
    window.location.href = deepLink;
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
