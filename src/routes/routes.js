const { Router } = require('express');
const router = Router();
const BD = require('../config/configbd');


router.get('/getUsuarios',async(req,res)=>{
    consulta = 'select * from estudiante'

    let result = await BD.Open(consulta, [], false);
    Personas = []

    result.rows.map(persona =>{
        let personaSchema ={
        "nombre" : persona[0],
        "email"  : persona[1],
        "contrasenia" : persona[2]
    }
    
    Personas.push(personaSchema);

    })

    res.json(Personas)

});

router.post('/registro',async(req, res) =>{
    const {nombre, email, contrasenia} = req.body;
    consulta = "insert into estudiante values (:nombre, :email, :contrasenia)"

    await BD.Open(consulta,[nombre, email, contrasenia], true);

    res.status(200).json({
        "nombre":nombre,
        "email":email,
        "contrasenia":contrasenia
    })
    
    
})

router.post('/login',async(req, res)=>{
    const {email, contrasenia} = req.body

    let consulta = "select * from estudiante where email=:email and contrasenia=:contrasenia"
    let cuenta = await BD.Open(consulta,[email,contrasenia], true);

    if (cuenta.rows.length > 0){
        res.json({
            auth : true
        })
    }else{
        res.json({
            auth : false
        })
    }
})




module.exports = router;
