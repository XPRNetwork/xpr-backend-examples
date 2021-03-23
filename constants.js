const ACCOUNT = 'testdeploy'
const ACCOUNT_PERMISSION = 'active'
const SYSTEM = 'eosio' // don't change
const XPR_TOKEN_CONTRACT = 'eosio.token' // don't change

const CHAIN = 'proton-test' // change to 'proton' for mainnet
const ENDPOINT = CHAIN === 'proton'
    ? 'https://proton.eoscafeblock.com'
    : 'https://testnet.protonchain.com'

const NFT_API = CHAIN === 'proton'
    ? 'https://proton.api.atomicassets.io'
    : 'https://test.proton.api.atomicassets.io'

module.exports = {
    ACCOUNT,
    ACCOUNT_PERMISSION,
    SYSTEM,
    XPR_TOKEN_CONTRACT,
    CHAIN,
    ENDPOINT,
    NFT_API
}