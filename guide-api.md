# Guide API

## Tipos de métodos:

- GET      => Buscar informação
- POST     => Inserir/criar uma informação
- PUT      => Alterar uma informação
- DELETE   => Apagar uma informação
- PATCH    => Alterar uma informação especifica

## Tipos de parâmetros:

- Routes Params    => http://localhost:3000/produtos/{{id}}
- Query Params     => http://localhost:3000/produtos?name={{name}}&description={{description}} 
> Não obrigatórios
- Body Params      => No corpo da requisão (POST|PATCH|PUT)
```
{
    "name": "teclado",
    "description": "teclado bom"
}
```