import app from "./src/app/app.js";
import { sequelize } from "./src/database/database.js";

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(3002, () => 
        console.log("Servidor corriendo en el puerto http://localhost:3002 "));
    } catch (error) {
        console.error("La conexion fallo");
    }
}

main();