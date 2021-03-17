// Import MySQL connection.
var connection = require("./config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  allBurgers: function(table, cb) { 
     let queryString = `SELECT * FROM  + ${table};`;
     console.log(queryString)
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  createBurgers: function(table, cols, vals, cb) {
    var queryString = `INSERT INTO + ${table} (${cols}) VALUES ("${val}");`

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //need to do update here.
  updateBurgers: function() {
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