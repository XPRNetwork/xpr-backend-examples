const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const createNft = async ({
    collection_name,
    schema_name,
    template_id,
    immutable_data,
    mutable_data
}) => {
    await transact([{
        account: "atomicassets",
        name: "mintasset",
        data: {
            authorized_minter: ACCOUNT,
            collection_name: collection_name,
            schema_name: schema_name,
            template_id: template_id,
            new_asset_owner: ACCOUNT,
            immutable_data: immutable_data,
            mutable_data: mutable_data,
            tokens_to_back: []
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`NFT created!`)
}

module.exports = {
    createNft
}