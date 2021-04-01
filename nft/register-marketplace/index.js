const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const registerMarketplace = async ({
    marketplace_name
}) => {
    await transact([
        {
            account: "atomicmarket",
            name: "regmarket",
            data: {
                creator: marketplace_name,
                marketplace_name: marketplace_name,
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        },
    ])
    console.log(`Registered marketplace ${marketplace_name}!`)
}

module.exports = {
    registerMarketplace
}