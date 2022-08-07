import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
            <br></br>
            <br></br>
            <br></br>           
            <h1 style={{textAlign: 'center'}}><b>HardBank v0.2</b></h1>
            <h5 style={{textAlign: 'center'}}>
            <i>Bringing the barcode to the blockchain</i>
            </h5>
            <br></br>
            <p style={{textAlign: 'center'}}>
                Our protocol is designed to realize <b>full-chain</b> transactions for physical products
                <br></br>
                by injectively assigning unique NFT smart contract addresses to physical products.
                <br></br>
                <br></br>
                Like a barcode being scanned, the product's smart contract is engaged to mint an NFT for each purchase,
                <br></br>
                effectively creating an on-chain representation of the purchase.
                <br></br>
                <br></br>
                To receive the physical product,
                <br></br>
                the minted NFT is claimed in a process which also airdrops loyalty tokens to the purchaser.
                <br></br>
                <br></br>
                <b>This Demo sells physical branches on the Rinkeby testnet to provide a preview of how our protocol works</b>
                <br></br>
                <br></br>
                <a target="_self" href="/Demo" rel="noreferrer">
                <button style={{itemAlign: 'center', marginBottom: 5, padding: 5, paddingLeft: 20, paddingRight: 20}}>ENTER</button>
                </a>
                <br></br>

            <br></br>
            </p>
            <i>For those whitelisted as Owners, visit the Owner tab to view and claim sales proceeds in real time.</i>
            <br></br>
            <br></br>
            <b>Full-chain transaction:</b> A transaction where the full exchange -- (i) the product being purchased and (ii) the cryptocurrency used to purchase the product -- is represented on-chain.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    </div>
  );
}

export default Home;