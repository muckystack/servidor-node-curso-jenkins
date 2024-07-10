const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log("Bienvenido seas a la aplicacion de prueba del servicio de jenkins")
    console.log("Se agrego un cambio")
});

