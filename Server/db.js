const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Acdoql123@",
    host: "localhost",
    port: 5429,
    database: "runningtideinventory"
});

module.exports = pool;
