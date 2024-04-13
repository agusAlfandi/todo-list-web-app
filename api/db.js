const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo-list",
});

connection.connect((err) => {
  if (err) return console.log("database error");
  console.log("database connected 👍");
});

module.exports = connection;
