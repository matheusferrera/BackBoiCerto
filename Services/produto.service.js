import produtoRepository from "../Repositories/produto.repository.js";

async function createProduto(params) {
    return await produtoRepository.createProduto(params)
}

async function updateProduto(params) {
    return await produtoRepository.updateProduto(params)
}

async function getProduto(params) {
    console.log("SERVICE --> " + JSON.stringify(params))
    return await produtoRepository.getProduto(params)
    
}

export default {createProduto, updateProduto, getProduto}