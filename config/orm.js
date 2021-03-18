// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(table, cb) { 
     let queryString = `SELECT * FROM ${table};`;
     console.log(queryString)
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table,cols,  vals, cb) {
    var queryString = `INSERT INTO ${table} (burger_name,devoured) VALUES (?,?);`

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //need to do update here.
  update: function(table,  condition, cb) {
    var queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString +=  "devoured = true"
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete:	function(table, col, val, cb) {
		let queryStr = `DELETE FROM ${table} WHERE ${col} = ${val};`;
			connection.query( queryStr, 
				function(err, result) {
					if (err) throw err;
					cb(result);
				}
			);
		}
}

// Export the orm object for the model (cat.js).
module.exports = orm;