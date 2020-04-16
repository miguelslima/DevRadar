const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./route');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://gnomolouco:Absolut123@cluster0-k1k7s.gcp.mongodb.net/Nametest?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE;
// Tipos de parâmetros:

// Query parms: req.query (Filtros, ordenação, paginação, ...)
// Route parms: request.partams(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou ateração de um registro)

// MongoDB (Não-relacional)

