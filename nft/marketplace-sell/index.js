const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const sellNft = async ({
    asset_ids,
    listing_price,
    settlement_symbol,
    maker_marketplace
}) => {
    const [precision, symbol] = settlement_symbol.split(',')

    await transact([
        {
            account: "atomicmarket",
            name: "announcesale",
            data: {
                seller: ACCOUNT,
                asset_ids: asset_ids,
                listing_price: `${listing_price.toFixed(precision)} ${symbol}`,
                settlement_symbol: settlement_symbol,
                maker_marketplace: maker_marketplace
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
    console.log(`NFT successfully listed for ${listing_price} ${symbol}!`)
}

module.exports = {
    sellNft
}