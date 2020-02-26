const lowdb = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('src/db/database.json')
const dataBase = lowdb(adapter);

dataBase.defaults({
  users: []
}).write();

module.exports = dataBase;