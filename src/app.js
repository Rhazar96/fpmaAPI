const express = require("express");
const bodyParser = require("express");
const app = express();

//config servidor
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(express.json());


//Divisao de rotas
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas  
const fpmaApi = require('./routes/fpma.route');
app.use('/api/v1', fpmaApi);

//Servidor
app.listen(app.get("port"), () => {
console.log("Servidor iniciado na porta: " + app.get("port"));
});