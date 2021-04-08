const { Pool } = require("pg");

function initDB() {
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "donationpage",
    port: "5432",
  });
  return pool;
}

module.exports = { initDB };
