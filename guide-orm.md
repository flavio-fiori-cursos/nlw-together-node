# Guide ORM (TypeORM)

## Entidade
Referencia as tabelas do banco de dados

## Repositories 
Camada que se comunica com o banco de dados (metodos que gerenciam).

## Services
Camada para implementar regras

## Controllers 
Repassa as informações do server para o services

## Fluxo 
server -> controllers -> services -> repositories -> BD
 

## Comandos BD 

## Migrations

Cria migration:
```
npm run typeorm migration:create --  -n CreateUsers

```
Executa as migration:

```
npm run typeorm migration:run

```

Reverte as migration:

```
 npm run typeorm migration:revert
```

### Entities

Cria entidades:

```
 npm run typeorm entity:create -- -n User
```