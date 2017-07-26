const express = require('express');
const app = express();
//__dirname es una variable de node que apunta al directorio en el que esta el archivo
app.use(express.static(__dirname + '/public'));

//define una direccion, si entran a / servira la pagina index
app.get('/', (req, res) => {
	return res.sendFile(__dirname + '/public/index.html');
});

//si entran a una pagina diferente de / los redigira a esta
app.get('/*', (req, res) => {
	return res.redirect("/");
});


module.exports = app;