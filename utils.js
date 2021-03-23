const { readdirSync } = require('fs')
const { join } = require('path')

function getDeployableFilesFromDir(dir) {
    const dirCont = readdirSync(dir)
    const wasmFileName = dirCont.find(filePath => filePath.match(/.*\.(wasm)$/gi))
    const abiFileName = dirCont.find(filePath => filePath.match(/.*\.(abi)$/gi))
    if (!wasmFileName) throw new Error(`Cannot find a ".wasm file" in ${dir}`)
    if (!abiFileName) throw new Error(`Cannot find an ".abi file" in ${dir}`)
    return {
      wasmPath: join(dir, wasmFileName),
      abiPath: join(dir, abiFileName),
    }
}

module.exports = {
    getDeployableFilesFromDir
}