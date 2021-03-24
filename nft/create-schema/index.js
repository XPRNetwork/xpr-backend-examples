const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const createSchema = async ({
    collection_name,
    schema_name,
    schema
}) => {
    await transact([{
        account: "atomicassets",
        name: "createschema",
        data: {
            authorized_creator: ACCOUNT,
            collection_name: collection_name,
            schema_name: schema_name,
            schema_format: Object.entries(schema).map(([key, type]) => ({
                name: key,
                type: type
            }))
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`Schema created!`)
}

module.exports = {
    createSchema
}