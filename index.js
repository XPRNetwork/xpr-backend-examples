const { buyRam } = require('./buyram')
const { deployToken } = require('./deploy-token')
const { createToken } = require('./create-token')
const { issueToken } = require('./issue-token')
const { transferToken } = require('./transfer-token')

const main = async () => {
    // 300 KB, costs 20 XPR / KB + 10% fee (~6,600 XPR for 300KB)
    await buyRam({ bytes: 300000 })
    await deployToken()

    // Note that the .0000 means precision is 4 for this token
    await createToken({ maximumSupply: '10000.0000 RANDOM' })
    await issueToken({ quantity: '10000.0000 RANDOM'})

    // await transferToken({ to: 'syed', quantity: '1.0000 RANDOM', memo: '' })
}

main()