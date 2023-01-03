import express from "express"; 
import produtoController from "../Controllers/produto.controller.js";
import bodyParser from "body-parser";

const app = express.Router()
// app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", produtoController.createProduto)
app.put("/", produtoController.updateProduto)
app.get("/:id", produtoController.getProduto)
app.post("/:id", produtoController.getProduto)



export default app