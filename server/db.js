const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2547686713Cc!",
    host: "localhost",
    port: 5432,
    database: "work"
});

module.exports = pool;