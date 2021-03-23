const { rpc } = require('../../api')
const { ACCOUNT } = require('../../constants')

const getTemplates = async ({
    collection_name
}) => {
    const { rows } = await rpc.get_table_rows({
        code: 'atomicassets',
        scope: collection_name,
        table: 'templates',
        limit: -1
    })
    return rows
}

module.exports = {
    getTemplates
}