const { rpc } = require('../../api')
const { ACCOUNT } = require('../../constants')

const getNfts = async ({
    owner
}) => {
    const { rows } = await rpc.get_table_rows({
        code: 'atomicassets',
        scope: owner,
        table: 'assets',
        limit: -1
    })
    return rows
}

module.exports = {
    getNfts
}