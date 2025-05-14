const express = require('express');
const app = express();
const PORT = 3000;

const usuarios = [{
    "username":"allanm",
    "email":"allan@gmail.com",
    "celphone":"5465656",
    "password":"1234"
}];

//Bloque de codigo para las rutas
app.get('/usuarios/:id', (req, res)=>{
    let id = req.params.id;
    console.log(id);
    res.json({username:'jperez', id:'1', password:'1234'});
});

app.get('/usuarios',(req, res)=>{
    res.json(usuarios);
});

app.post('/usuarios', (req, res)=>{
    const usuario = req.body;
    console.log(usuario);
    usuarios.push(usuario);
    res.json({message:"Success",data:usuario});
});

app.listen(PORT,()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});