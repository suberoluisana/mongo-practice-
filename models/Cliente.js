const mongoose = require("mongoose");

// Definición del esquema de clientes
const clienteSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    servicio: {
        type: String,
        required: true
    }

});

// Creamos el modelo Cliente
const Cliente = mongoose.model(
    "Cliente",
    clienteSchema
);

module.exports = Cliente;
