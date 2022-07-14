//1carga de la base de datos desde la carpeta models.
//carag por defectoel index de la carpeta.
const db=require("./models");
const chalk=require("chalk");
//2.1 probar que sequelize funciones y se coencte correctmente
async function conectar(){
    try {
        await db.sequelize.authenticate();
        console.log("-------------------------Conexion Establesida----------");
    } catch (error) {
        console.log(chalk.red.inverse("Eror en la conecxion"+error.message));
    }
}
//2.2 ejecutar la funcion
conectar();
//3.- sincronizar la base de datos
async function sincronizar(){
    try {
        await db.sequelize.sync({});
        console.log(chalk.green.inverse("---------------sincronizado corectamente"));
    } catch (error) {
        console.log(chalk.red.inverse("Error en la conexion"+error.message))
        
    }
};
sincronizar();
//4.- crear unos usuarios
async function crearUsuario(nombre,apellido){
    try {
        await db.Usuario.create({
            nombre:nombre,
            apellido:apellido
        });
        console.log(chalk.green.inverse("Usuario creado correctamente"));
    } catch (error) {
        console.log(chalk.red.inverse("Error en la creacion de usuario"+error.message));
    }
}
//crearUsuario("denis","pacheco");
//crearUsuario("guillermo","malaga");