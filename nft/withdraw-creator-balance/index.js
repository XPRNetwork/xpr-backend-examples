const { transact } = require('../../api')

const withdrawCreatorBalance = async ({
    collection_creator,
    token_to_withdraw
}) => {
    await transact([
        {
            account: "atomicmarket",
            name: "withdraw",
            data: {
                owner: collection_creator,
                token_to_withdraw: token_to_withdraw
            },
            authorization: [{ actor: collection_creator, permission: 'active' }],
        }
    ])
    console.log(`Successfully withdrew ${token_to_withdraw} to creator (${collection_creator}) account!`)
}

module.exports = {
    withdrawCreatorBalance
}