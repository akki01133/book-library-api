## Description
--- 
Book Library api built using Express.js and MongoDB. 

## Features :
- the project is built upon the `MVC architecute` as its small and compact domain and the features can be extended easily.
- used `body_parser` package to except `x-www-form-urlencoded data` in request body and respond in JSON format. 
- used `express-async-handler` package to add a exception catch wrapper over functions to handle runtime or uncaught error and prevent server crash

## api-endpoints
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

```
💡 documented with 💖 by Ajeet | kr 
```
