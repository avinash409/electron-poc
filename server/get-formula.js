var sqliteDB = require("./sqlite-db.js");
var height = process.argv[2]; 
sqliteDB.getFormula(height);