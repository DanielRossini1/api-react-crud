var server = require("./src/routes");
var cors = require('cors');

server.use(cors());

server.listen(3001, 'localhost', () => {
  console.log("server up");
})