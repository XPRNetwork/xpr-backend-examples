const { readFileSync } = require('fs')
const { Serialize } = require('@proton/js')
const { api, transact } = require('../../api')
const { getDeployableFilesFromDir } = require('../../utils')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const deployToken = async () => {
    const {wasmPath, abiPath} = getDeployableFilesFromDir(__dirname)

    // 1. Prepare SETCODE
    // read the file and make a hex string out of it
    const wasm = readFileSync(wasmPath).toString('hex')

    // 2. Prepare SETABI
    const abiBuffer = new Serialize.SerialBuffer()
    const abiDefinition = api.abiTypes.get('abi_def')
    abiDefinition.serialize(
      abiBuffer,
      abiDefinition.fields.reduce(
        (acc, {name: fieldName}) => {
          return Object.assign(acc, {
            [fieldName]: acc[fieldName] || [],
          })
        }, JSON.parse(readFileSync(abiPath, 'utf8'))
      )
    )

    // 3. Set code
    try {
        await transact([{
            account: 'eosio',
            name: 'setcode',
            data: {
                account: ACCOUNT,
                vmtype: 0,
                vmversion: 0,
                code: wasm,
            },
            authorization: [{
                actor: ACCOUNT,
                permission: ACCOUNT_PERMISSION,
            }],
        }])
        console.log(`WASM successfully deployed!`)
    } catch (error) {
        console.log('Set WASM failed', error)
    }
    
    // 4. Set ABI
    try {
        await transact([{
            account: 'eosio',
            name: 'setabi',
            data: {
                account: ACCOUNT,
                abi: Buffer.from(abiBuffer.asUint8Array()).toString('hex'),
            },
            authorization: [{
                actor: ACCOUNT,
                permission: ACCOUNT_PERMISSION,
            }],
        }])
        console.log(`ABI successfully deployed!`)
    } catch (error) {
        console.log('Set abi failed', error)
    }
}

module.exports = {
    deployToken
}