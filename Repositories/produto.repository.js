import { getClient } from "../DB/mongo.db.js";


async function createProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        console.log("Chamou o post -> "+ JSON.stringify(params))
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
        console.log("Repository ---->" + JSON.stringify(params))
        const raca = new RegExp(`${params.raca}`);
        const respostaNull = new RegExp(`${''}`);
        const loc = new RegExp(`${params.loc}`);
        

        async function getResults() {
            return  await client.db("boiCerto").collection("boi").find( { 
                "raca": params.raca ? { $regex: raca } : { $regex: respostaNull}, 
                "cidade": params.loc ?  { $regex: loc } : { $regex: respostaNull}
            }).toArray()
        }

        const results = await getResults();
        return results


    } catch (err) {
        throw err
    } finally {
        
        setTimeout(() => { client.close() }, 1500)
       
    }
}

export default {createProduto, updateProduto, getProduto}