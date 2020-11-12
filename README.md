
<img src="https://www.apeironsoftware.com/wp-content/uploads/2019/07/nodemysql.jpg"  alt="" align="center">
### What is Sequelize ?
Sequelize is a promise-based ORM(Object Relational Mapping) for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite, and MSSQL plus some cool features like transactions and eager-loading.


### What is ORM in node JS?
Object Relational Mapping (ORM) is the process of mapping between objects and relational database systems. ... Helps to effectively query from multiple tables similar to SQL JOIN—ORM takes the responsibility of converting the object-oriented query approach to SQL queries.
### Why use Sequelize instead of standard SQL Queries?

Basically because it supports more than one database system and it provides you an OOP Database API with all queries in form of methods and function so you don’t have to write or care about queries plus its advanced Association system for putting relations between Models.

### Installing Sequalize
```node
npm install sequelize
```

Sequelize Also requires your database system driver(depending on what dialect you choose) on our case we will be working with MySQL.

```node
npm install mysql2
```

This will install MySQL adapter which allows Sequelize to connect and to the MySQL Deamon server.

We also, need to install Sequelize-CLI for managing our project and keeping track of migrations.
```node
npm install sequelize-cli -g
```
We save the CLI globally because you will be using on more than one project and you need to access directly through the command line.

>   Type the following in cmd:-
```cmd
sequelize init
```
## Projecxt Setup

### Connecting to Database
First, we need to open connection steam between Sequelize and the running MySQL Deamon.

Create a database folder under src/database and add a connection.js file under it.

```node
/* connection.js */

const Sequelize = require("sequelize");

const sequelize = new Sequelize("socialnetwork", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliases: 0
});

module.exports = sequelize;
global.sequelize = sequelize;
```

Change the config depending on your database server settings.

we export the connection instance as well as we export it globally which means we can access the Sequelize instance from any module on our environment without import (Global variables aren’t good but in our case, it is the best scenario).

Now under the app.js (or main entry point module), you can require the connection module to connect to the database and expose the connection instance globally.

```node
require("./src/database/connection");
```

## Migrations 
#### Creating Migrations :-
```
sequelize migration:create --name create_tweets_table
```

#### executing Migrations :-
```
sequelize db:migrate 
```

[Follow This For Documentation](https://ipenywis.com/learn-sequelize-orm-on-node-js-with-mysql-from-scratch-in-one-video-61a483ecfa45)