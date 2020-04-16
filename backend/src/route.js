const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;


/*
app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    return response.json( { message: 'Hello WOrld' });
});

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json( { message: 'Hello WOrld' });
});
*/