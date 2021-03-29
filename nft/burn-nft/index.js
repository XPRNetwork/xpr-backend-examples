const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const burnNft = async ({
    asset_id
}) => {
    await transact([{
        account: "atomicassets",
        name: "burnasset",
        data: {
            asset_owner: ACCOUNT,
            asset_id: asset_id
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`NFT burned!`)
}

module.exports = {
    burnNft
}