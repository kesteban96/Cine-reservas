//confgurar el servidor cuando este empieza (encargado de arrancar el servidor)

const express = require('express');
const app = express(); //app es la encargada de tener toda la funcionalidad del servidor

// dividiendo el servidor en multiples tareas

// configuracion

app.set('port', process.env.PORT || 3000); //me indica que si en la nube me asignan un puerto debo tomarlo de lo contrario tome el 3000


//funciones que procesa datos

//rutas del servdor 

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto 3000') // es decir que mi servidor escucha en el puerto
});