const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const buyNft = async ({
    token_contract,
    quantity,
    sale_id
}) => {
    await transact([
        {
            account: token_contract,
            name: "transfer",
            data: {
                from: ACCOUNT,
                to: 'atomicmarket',
                quantity: quantity,
                memo: 'deposit'
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        },
        {
            account: "atomicmarket",
            name: "purchasesale",
            data: {
                buyer: ACCOUNT,
                sale_id: sale_id,
                intended_delphi_median: 0,
                taker_marketplace: 'fees.market'
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        }
    ])
}

module.exports = {
    buyNft
}