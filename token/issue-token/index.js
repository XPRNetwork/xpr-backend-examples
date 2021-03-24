const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const issueToken = async ({ quantity }) => {
    await transact([{
        account: ACCOUNT,
        name: 'issue',
        data: {
            to: ACCOUNT,
            quantity: quantity,
            memo: ''
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])

    console.log(`${quantity} successfully issued to ${ACCOUNT}`)
}

module.exports = {
    issueToken
}