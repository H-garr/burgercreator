const orm = require("../config/orm.js");

const crudBurgers = {
        all: function(cb) {
            orm.all('burgers', function(res) {
              cb(res);
            });
          },
          create: function(burger_name, cb) {
            orm.create('burgers', 'burger_name', burger_name, function(res) {
              cb(res);
            });
          },
          update: function(id,burgerID, cb) {
            orm.update('burgers', `id = ${burgerID}`, function(res) {
              cb(res);
            });
          },
          delete: function(burgerID,cb) {
            orm.delete('burgers', 'id', burgerID, function(res) {
              cb(res);
            });
          }
        
}

module.exports = crudBurgers;