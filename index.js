const express = require('express');
const app = express();
const PORT = 3000;

const usuarios = [{
    "username":"allanm",
    "email":"allan@gmail.com",
    "celphone":"5465656",
    "password":"1234"
}];

app.use(express.json());

//Bloque de codigo para las rutas
app.get('/usuarios/:id', (req, res)=>{
    let id = req.params.id;
    console.log(id);
    res.json({username:'jperez', id:'1', password:'1234'});
});

app.get('/usuarios',(req, res)=>{
    res.status(400).json(usuarios);
});

app.post('/usuarios/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const usuario = req.body;
    usuarios.push(usuario);
    res.json({message:"Nuevo mensaje",data:usuario, id:id});
});

app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});