const { fetch } = require('../../api')
const { NFT_API } = require('../../constants')

const getNftsAdvanced = async ({
    owner,
    collection_name,
    page = 1,
    limit = 100
}) => {
    const url = `${NFT_API}/atomicassets/v1/assets?owner=${owner}&collection_name=${collection_name}&state=1&page=${page}&limit=${limit}&order=desc&sort=created`
    const res = await fetch(url)
    const { data } = await res.json()
    return data
}

module.exports = {
    getNftsAdvanced
}