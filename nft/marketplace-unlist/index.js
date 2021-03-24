const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const cancelNftSale = async ({
    sale_id
}) => {
    await transact([
        {
            account: "atomicmarket",
            name: "cancelsale",
            data: {
                sale_id: sale_id
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        }
    ])
    console.log(`NFT successfully unlisted!`)
}

module.exports = {
    cancelNftSale
}