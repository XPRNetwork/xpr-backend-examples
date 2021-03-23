# Proton Examples

Modify .env with your private key and constants.js with your account name, etc

Main function shows the following:
1. Purchase blockchain storage
2. Deploying token contract like RANDOM
3. Create RANDOM
4. Issue RANDOM
5. Transfer RANDOM
6. Create NFT Collection
7. Create NFT Schema (data structure)
8. Create NFT Template
9. Create NFT 
10. Get NFTs owned
11. Sell NFT for XPR
12. Get NFT listings
13. Buy NFT with XPR
14. Cancel NFT sale

# Installation

```
npm i
```

# Example run

Modify index.js at root and run `node index.js`

```js
const { buyStorage } = require('./chain/buy-storage')

const main = async () => {
    // Buy Blockchain Storage
    // Costs 20 XPR / KB + 10% fee (~6,600 XPR for 300KB)
    await buyStorage({
        bytes: 300000 // 300 KB
    })
}

main()
```

# Setup testnet
1. Go to https://monitor.testnet.protonchain.com/
2. Create key pair (save this securely)
3. Create account 
4. Faucet for some free testnet XPR!