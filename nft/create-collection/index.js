const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const createCollection = async ({
    collection_name,
    creator_fee,
    data
}) => {
    await transact([{
        account: "atomicassets",
        name: "createcol",
        data: {
            author: ACCOUNT,
            collection_name: collection_name,
            allow_notify: true,
            authorized_accounts: [ACCOUNT],
            notify_accounts: [],
            market_fee: creator_fee,
            data: data
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`Collection ${collection_name} created!`)
}

module.exports = {
    createCollection
}