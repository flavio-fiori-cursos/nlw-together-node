# NLW Valoriza
Projeto realizado acompanhando o evento NLW Together da Rocketseat. O objetivo 
desse projeto consiste em: disponibilizar API's para gerenciamento de elogios entre usuários.

## API'S Disponiveis

| Nome      |  Verbos       | Autenticável | Descrição
| -----     | --------      | ------------ | ---------- |
|  Usuários |  POST e GET   | Sim          | Cria e lista usuários
|  Tags     |  POST e GET   | Sim          | Cria e lista tags/categorias de elogios
|  Elogios  |  POST e GET   | Sim          | Cria e lista elogios

## Instalação
Após o clone do repositório, entre no diretório do projeto e rode:

```
npm install
```

## Comandos

### Desenvolvimento 

```
npm run dev
```

## Tecnologias e pacotes
- Node e Express
- Typescript
- Autenticação JWT
- Camadas: controllers -> services -> repositories -> Banco de dados
- Banco de dados: SQLite
- ORM: TypeORM

## Status

:construction: Em desenvolvimento