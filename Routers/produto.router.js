import express from "express"; 
import produtoController from "../Controllers/produto.controller.js";

const app = express.Router()
// app.use(express.json())

app.post("/", produtoController.createProduto)
app.put("/", produtoController.updateProduto)
app.get("/:id", produtoController.getProduto)



export default app