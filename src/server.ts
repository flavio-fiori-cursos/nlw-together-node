import express from 'express';

const app = express();

app.get('/teste', (request, response) => {

    return response.send("Olá Nlw");

});

app.post('/teste-post', (request, response) => {

    return response.send('Método post');

})

app.listen(3000, () => {

    console.log('Server is running');
    
});

/**
 * Tipos de métodos:
 * 
 * GET      => Buscar informação
 * POST     => Inserir/criar uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Apagar uma informação
 * PATCH    => Alterar uma informação especifica
 * 
 */