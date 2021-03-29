const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const setCollectionData = async ({
    collection_name,
    data
}) => {
    await transact([{
        account: "atomicassets",
        name: "setcoldata",
        data: {
            collection_name: collection_name,
            data: data
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`Collection ${collection_name} data updated!`)
}

module.exports = {
    setCollectionData
}