const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const transferToken = async ({ tokenContract, to, quantity, memo }) => {
    await transact([{
        account: tokenContract,
        name: 'transfer',
        data: {
            from: ACCOUNT,
            to,
            quantity,
            memo
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])
    console.log(`${quantity} successfully transferred from ${ACCOUNT} to ${to}`)
}

module.exports = {
    transferToken
}