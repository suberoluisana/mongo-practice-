const mongoose = require("mongoose");
require("dotenv").config();

const Cliente = require("./models/Cliente");

// Conexión con MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(async () => {

        console.log("Conexión exitosa con MongoDB.");

        // Crear un nuevo cliente de prueba
        const nuevoCliente = new Cliente({
            nombre: "Ana González",
            correo: "ana.gonzalez@email.com",
            servicio: "Consultoría estratégica"
        });

        await nuevoCliente.save();

        console.log("Cliente registrado correctamente.");

        // Consultar todos los clientes
        const clientes = await Cliente.find();

        console.log("Clientes registrados:");

        console.log(clientes);

        // Cerrar conexión
        await mongoose.connection.close();

        console.log("Conexión cerrada.");

    })
    .catch((error) => {

        console.error(
            "Error al conectar con MongoDB:",
            error.message
        );

    });
