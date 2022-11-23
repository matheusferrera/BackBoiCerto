import { getClient } from "../DB/mongo.db.js";


async function createProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("boiCerto").collection("boi").insertOne(params)
    } catch (err) {
        throw err
    } finally {
        await client.close()
    }
}

async function updateProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("boiCerto").collection("boi").updateOne({idProduto: params.idProduto}, {$set: {...params}})
    } catch (err) {
        throw err
    } finally {
        await client.close()
    }
}

async function getProduto(params) {
    const client = getClient()

    try {
        await client.connect()
        const pesquisa = new RegExp(`${params}`);
        
        async function getResults() {
            return  await client.db("boiCerto").collection("boi").find( { "raca": { $regex: pesquisa }}).toArray()
        }
        const results = await getResults();
        console.log("RESULTADO -> " + results)
        return results


    } catch (err) {
        throw err
    } finally {
        
        setTimeout(() => { client.close() }, 1500)
       
    }
}

export default {createProduto, updateProduto, getProduto}