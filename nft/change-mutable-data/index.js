const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const setNftMutableData = async ({
    asset_owner,
    asset_id,
    new_mutable_data
}) => {
    await transact([{
        account: "atomicassets",
        name: "setassetdata",
        data: {
            authorized_editor: ACCOUNT,
            asset_owner: asset_owner,
            asset_id: asset_id,
            new_mutable_data: new_mutable_data
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }],
    }])
    console.log(`NFT mutable data changed!`)
}

module.exports = {
    setNftMutableData
}