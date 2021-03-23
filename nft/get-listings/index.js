const { fetch } = require('../../api')
const { NFT_API } = require('../../constants')

const getListings = async ({
    seller,
    collection_name
}) => {
    const res = await fetch(`${NFT_API}/atomicmarket/v1/sales?seller=${seller}&collection_name=${collection_name}&state=1&page=1&limit=100&order=desc&sort=created`)
    const { data } = await res.json()
    return data
}

module.exports = {
    getListings
}