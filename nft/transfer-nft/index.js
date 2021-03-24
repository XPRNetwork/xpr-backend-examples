const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const transferNft = async ({
    to,
    asset_ids,
    memo,
}) => {
    await transact([
        {
            account: "atomicassets",
            name: "transfer",
            data: {
                from: ACCOUNT,
                to: to,
                asset_ids: asset_ids,
                memo: memo
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        }
    ])
    console.log(`NFT successfully transfered to ${to}!`)
}

module.exports = {
    transferNft
}