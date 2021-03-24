const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const sellNft = async ({
    asset_ids,
    listing_price,
    settlement_symbol
}) => {
    await transact([
        {
            account: "atomicmarket",
            name: "announcesale",
            data: {
                seller: ACCOUNT,
                asset_ids: asset_ids,
                listing_price: listing_price,
                settlement_symbol: settlement_symbol,
                maker_marketplace: 'fees.market' 
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        },
        {
            account: "atomicassets",
            name: "createoffer",
            data: {
                sender: ACCOUNT,
                recipient: 'atomicmarket',
                sender_asset_ids: asset_ids,
                recipient_asset_ids: [],
                memo: 'sale'
            },
            authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
        }
    ])
    console.log(`NFT successfully listed for ${listing_price}!`)
}

module.exports = {
    sellNft
}