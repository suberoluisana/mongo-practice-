# Informe – Evaluación Módulo 6

## ¿Qué aprendiste sobre MongoDB y Mongoose?

En esta actividad aprendí a conectar una aplicación de Node.js con MongoDB utilizando Mongoose. También aprendí a crear esquemas y modelos para organizar la información, insertar documentos en una colección y realizar consultas para recuperar los registros almacenados.

## ¿Por qué MongoDB es una buena opción en ciertos proyectos?

Considero que MongoDB es una buena opción para proyectos que necesitan trabajar con información de manera flexible y escalable. Su estructura basada en documentos permite almacenar datos de forma organizada y facilita realizar cambios en la estructura cuando las necesidades del proyecto evolucionan.

## ¿Qué retos enfrentaste y cómo los resolviste?

Uno de los principales retos fue configurar correctamente la conexión entre Node.js y MongoDB Atlas. Para resolverlo, organicé las credenciales mediante un archivo `.env` y utilicé Mongoose para administrar la conexión y el modelo de datos.

También tuve que comprender cómo separar el modelo del cliente del archivo principal, por lo que utilicé la carpeta `models/` y exporté el modelo mediante `module.exports`.

## Estructura del proyecto

El proyecto contiene `index.js` como archivo principal, `models/Cliente.js` para definir el esquema, `.env` para las credenciales de conexión, `.gitignore` para proteger información sensible y `package.json` para administrar las dependencias.

## Resultado

La aplicación permite conectar con MongoDB, registrar un cliente de prueba y consultar todos los clientes almacenados, mostrando los resultados directamente en la consola.
