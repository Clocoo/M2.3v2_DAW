const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");

process.env.port = 4001;

const llavePrivada = fs.readFileSync("C:\\Users\\J4VI\\private.key");
const certificado = fs.readFileSync("C:\\Users\\J4VI\\certificate.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "qwerty12"
};
const httpsServer = https.createServer(credenciales,app);

httpsServer.listen(process.env.port,()=>{
    console.log("Servidor https escuchando por el puerto: ",process.env.port);
}).on("error",err=>{
    console.log("Error al iniciar el servidor",err);
});

///////

const models = require("./models");
//models.sequelize.sync().then(()=>)
models.Proyecto.findAll()
.then(r=>{
    r.forEach(proyecto=>{
        console.log(proyecto.dataValues);
    });
    models.sequelize.close();
});
//});

//models.sequelize.sync().then(()=>)
models.Persona.findAll()
.then(r=>{
    r.forEach(persona=>{
        console.log(persona.dataValues);
    });
    models.sequelize.close();
});
//});

models.Donador.findAll()
  .then((r) => {
    r.forEach((donador) => {
      console.log(donador.dataValues);
    });
  })
  .catch((error) => {
    console.error('Error al listar los donadores:', error);
  })
  .finally(() => {
    models.sequelize.close();
  });

