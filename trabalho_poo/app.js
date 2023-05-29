
const express = require("express");

const app = express();

app.use(express.json());

let pessoa = ["matheus", "silva"];

app.get("/dados", (req, res) => {
    res.send("matheus")
});
app.get("/meusdados", (req, res) => {
    
    return res.json(pessoa);
});
app.post("/cadastrar", (req, res) => {
    var {nome} = req.body;
    pessoa.push(nome);
    res.send("Deu certo O cadastro")
});
app.put("/pessoas/:id", (req, res)=>{
    const { id } = req.params;
    const { nome } = req.body;

    pessoa[id] = nome;
    
    return res.json(pessoa);
});

app.delete("/delete/:id", (req, res) => {
    let { id } = req.params
    pessoa.splice(id, 1);
    return res.json({ message: "usuario deletado" })
});



app.listen(8080, () => { console.log("run"); })
















