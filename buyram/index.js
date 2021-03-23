const { transact } = require('../api')
const { SYSTEM_ACCOUNT, ACCOUNT, ACCOUNT_PERMISSION } = require('../constants')

const buyRam = async ({ bytes }) => {
    await transact([{
        account: SYSTEM_ACCOUNT,
        name: 'buyrambytes',
        data: {
            payer: ACCOUNT,
            receiver: ACCOUNT,
            bytes: bytes
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])
}

module.exports = {
    buyRam
}