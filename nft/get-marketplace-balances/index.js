const { rpc } = require('../../api')

const getMarketplaceBalances = async ({
    collection_creator
}) => {
    const { rows } = await rpc.get_table_rows({
        code: 'atomicmarket',
        scope: collection_creator,
        table: 'balances',
        limit: -1
    })
    return rows
}

module.exports = {
    getMarketplaceBalances
}