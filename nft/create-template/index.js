const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const createTemplate = async ({
    collection_name,
    schema_name,
    max_supply,
    immutable_data
}) => {
    await transact([{
        account: "atomicassets",
        name: "createtempl",
        data: {
            authorized_creator: ACCOUNT,
            collection_name: collection_name,
            schema_name: schema_name,
            transferable: true,
            burnable: true,
            max_supply: max_supply,
            immutable_data: immutable_data
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`Template created!`)
}

module.exports = {
    createTemplate
}