import express from "express";
import routerProduto from "./Routers/produto.router.js"
import cors from "cors"


const app = express()
// app.use(express.json())
app.use(cors())


//1º passo -> Ir na conexão no mongo DB (connect > connect your app) colar o link em db/mongo.db.js
//2º passo -> Rodar no terminal nodemon index.js

//Caso precise colocar mais alguma rota
app.use("/produto", routerProduto)


app.listen(3000, async () => { //Criacao do arquivo para armazenar dados
    try {
        console.log("MongoDB rodando com sucesso em: localhost:3000")
    } catch(err){
        console.log(err)
    }
    
})