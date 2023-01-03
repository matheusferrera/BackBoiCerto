import produtoService from "../Services/produto.service.js";


async function createProduto(req,res) {
    try {
        let insertData = req.body
        const data = await produtoService.createProduto(insertData) 
        res.send(data)

    } catch(err) {
        res.send(err)
    }
}

async function updateProduto(req,res) {
    try {
        let insertData = req.body
        const data = await produtoService.updateProduto(insertData)
        res.send(data)
        
    } catch(err) {
        res.send(err)
    }
}

async function getProduto(req,res) {
    try {
        console.log("Controller post  -->" + JSON.stringify(req.body))
        const data = await produtoService.getProduto(req.body)
        res.send(data)
    } catch(err) {
        res.send(err)
    }
}




export default { createProduto, updateProduto, getProduto }