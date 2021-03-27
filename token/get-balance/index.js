const { rpc } = require('../../api')

const getBalance = async ({
    account,
    tokenContract,
    tokenSymbol
}) => {
    const [balance] = await rpc.get_currency_balance(tokenContract, account, tokenSymbol)

    if (balance) {
        return Number(balance.split(' ')[0])
    } else {
        return 0
    }
}

module.exports = {
    getBalance
}