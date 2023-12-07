## Description
--- 
Book Library api built using Express.js and MongoDB. 

## Features :
- the project is built upon the `MVC architecute` as its small and compact domain and the features can be extended easily.
- used `.env` file to load and ensure security of the MONGO_URI and other secrets. See `sample.env` for the reference.
- used `body_parser` package to except `x-www-form-urlencoded data` in request body and respond in JSON format. 
- used `express-async-handler` package to add a exception catch wrapper over functions to handle runtime or uncaught error and prevent server crash

## api-endpoints
- view [Api-Documentation](https://documenter.getpostman.com/view/20218768/2s9YeN2oVB#0b30ef69-d793-4794-b866-3d2bd70f6c80)
- view [Postman-Api-Collection](https://elements.getpostman.com/redirect?entityId=20218768-0e42fb02-7f45-4959-944e-e2b2b72977db&entityType=collection)
- /api
    - get /books
    - post /books
    - put /books/:id

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Seed data as requested
- use this [postman-collection](https://elements.getpostman.com/redirect?entityId=20218768-d01cba84-c750-4c04-8b44-df947e5b078a&entityType=collection) to seed the mongo atlas database.

```
💡 documented with 💖 by Ajeet | kr 
```
