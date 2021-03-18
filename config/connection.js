var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ew3uhlj3tyn6lw82",
  password: "wiaann9ay4d9egvq",
  database: "o71kgde588gua5m3"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
