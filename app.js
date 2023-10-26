const models = require("./models");
//models.sequelize.sync().then(()=>)
models.Proyecto.findAll()
.then(r=>{
    r.forEach(proyecto=>{
        console.log(proyecto.dataValues);
    });
    //models.sequelize.close();
});
//});

//models.sequelize.sync().then(()=>)
models.Persona.findAll()
.then(r=>{
    r.forEach(persona=>{
        console.log(persona.dataValues);
    });
    //models.sequelize.close();
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
    //models.sequelize.close();
  });

/*   const agregaDonatarios = async () => {
    console.log("proyecto´ //////");
    const proy = await models.Proyecto.findByPk(1);
    //console.log(proy.dataValues);
    const pers = await models.Persona.findByPk(2);
    //const pro1 = await models.Proyecto.findByPk(1);
    //console.log(per1.dataValues);
    //console.log(pro1.dataValues);
    await proy.setDonatario(pers);
    const donatarios = await proy.getDonatario();
    await donatarios.forEach(p=>{
      console.log(p.nombre);
    });
    console.log("///// ´proyecto");
  } */

  const agregaDonadores = async () => {
    const proy = await models.Proyecto.findByPk(1);
    const pers = await models.Persona.findByPk(2);
    console.log(pers.nombre);
    console.log(proy.nombreProyecto);
    // Usamos el método addDonador para asociar el donador con el proyecto
    await proy.addDonadores(pers);
  
    // Recuperamos la lista de donadores asociados al proyecto
    const donadores = await proy.getDonadores();
  
    // Iteramos a través de los donadores y mostramos sus nombres
    await donadores.forEach(donador => {
      console.log(donador.idPersona);
    });
  }

  const agregaDonatarios = async () => {
    const proy = await models.Proyecto.findByPk(1);
    const pers = await models.Persona.findByPk(2);
  
    // Usamos el método setDonatario para establecer el donatario del proyecto
    await proy.setDonatario(pers);
  
    // Recuperamos el donatario asociado al proyecto
    const donatario = await proy.getDonatario();
  
    // Mostramos el nombre del donatario en la consola
    if (donatario) {
      console.log("Nombre del Donatario: "+donatario.nombre);
      console.log("Nombre del Proyecto: "+proy.nombreProyecto);
    } else {
      console.log("El proyecto no tiene donatario asignado.");
    }
  }
  

/*     const agregaDonadores = async () => {
      const proy = await models.Proyecto.findByPk(1);
      //console.log("proyecto´ //////");
      //console.log(proy.dataValues);
      const pers = await models.Persona.findByPk(2);
      //const pro1 = await models.Proyecto.findByPk(1);
      //console.log(per1.dataValues);
      //console.log(pro1.dataValues);
      await proy.setDonadores(pers);
      const donadores = await proy.getDonadores();
      await donadores.forEach(p=>{
        console.log(p.nombre);
      });
      //console.log("///// ´proyecto");
    } */

  //console.log(" = Donatarios =");
    agregaDonatarios();

  //console.log(" = Donadores = ");
    agregaDonadores();