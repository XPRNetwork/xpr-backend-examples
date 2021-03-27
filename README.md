# Proton Examples

Shows the following:
1. Purchase blockchain storage
2. Deploying token contract like RANDOM
3. Create RANDOM
4. Issue RANDOM
5. Transfer RANDOM
6. Get RANDOM balance
7. Create NFT Collection
8. Create NFT Schema (data structure)
9. Create NFT Template
10. Create NFT 
11. Get NFTs owned
12. Sell NFT for XPR
13. Get NFT listings
14. Buy NFT with XPR
15. Cancel NFT sale
16. Transfer NFT
17. Get Creator fee balances
18. Withdraw creator fees

# Installation
1. Rename .env.example to .env and set your private key
2. Run `npm i `
3. Modify index.js at root to run the functions you want
4. `node index.js`

# Example index.js

```js
const { buyStorage } = require('./chain/buy-storage')

const main = async () => {
    // Buy Blockchain Storage
    // Costs 22 XPR / KB (~6,600 XPR for 300KB)
    await buyStorage({
        bytes: 300000
    })
}

main()
```

# Setup testnet
1. Go to https://monitor.testnet.protonchain.com/
2. Create key pair (save this securely)
3. Create account with key pair
4. Faucet for some free testnet XPR!