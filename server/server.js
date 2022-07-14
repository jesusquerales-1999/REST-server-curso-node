const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('../config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





app.get('/',(req,res)=>{
    res.json('GET Hola mundo');
});
app.post('/',(req,res)=>{
    let body = req.body 

    if(body.nombre === undefined){
       res.status(400).json(
          {
            ok:false,
            mensage:'el nombre es necesario'
          }
       )
    }
    
    res.json(body).status(200);
});
app.put('/user/:id',(req,res)=>{
    let id = req.params.id
    res.json({
        id
    });
});
app.delete('/',(req,res)=>{
    res.json('DELETE Hola Mundo');
});


app.listen(process.env.PORT,()=>{
    console.log('app corriendo en elpuerto',process.env.PORT);
})





