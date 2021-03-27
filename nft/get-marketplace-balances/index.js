const { rpc } = require('../../api')

const getMarketplaceBalances = async ({
    collection_creator
}) => {
    const { rows } = await rpc.get_table_rows({
        code: 'atomicmarket',
        scope: 'atomicmarket',
        table: 'balances',
        lower_bound: collection_creator,
        upper_bound: collection_creator,
        limit: 1
    })

    if (rows && rows.length) {
        return rows[0].quantities
    } else {
        return []
    }
}

module.exports = {
    getMarketplaceBalances
}