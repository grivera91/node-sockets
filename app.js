const Server = require ('./models/server.js')
const dotenv = require ('dotenv')

dotenv.config();
const server = new Server();

server.listen();