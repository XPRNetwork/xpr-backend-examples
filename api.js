const {JsonRpc, Api, JsSignatureProvider} = require('@proton/js')
const {ENDPOINT} = require('./constants')
const fetch = require('node-fetch')

const rpc = new JsonRpc([ENDPOINT], { fetch: fetch })
const api = new Api({ rpc, signatureProvider: new JsSignatureProvider([process.env.PRIVATE_KEY])})

module.exports = {
    rpc,
    api,
    transact: (actions) => api.transact({actions}, {
        blocksBehind: 300,
        expireSeconds: 3000,
    }),
    fetch
}