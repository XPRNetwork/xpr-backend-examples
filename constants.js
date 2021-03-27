const ACCOUNT = process.env.ACCOUNT
const ACCOUNT_PERMISSION = process.env.ACCOUNT_PERMISSION
const CHAIN = process.env.CHAIN

const ENDPOINT = CHAIN === 'proton'
    ? 'https://proton.eoscafeblock.com'
    : 'https://testnet.protonchain.com'

const NFT_API = CHAIN === 'proton'
    ? 'https://proton.api.atomicassets.io'
    : 'https://test.proton.api.atomicassets.io'

const SYSTEM = 'eosio' // don't change
const XPR_TOKEN_CONTRACT = 'eosio.token' // don't change

module.exports = {
    ACCOUNT,
    ACCOUNT_PERMISSION,
    SYSTEM,
    XPR_TOKEN_CONTRACT,
    CHAIN,
    ENDPOINT,
    NFT_API
}