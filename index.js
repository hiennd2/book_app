// const express = require('express')
// const dotenv = require('dotenv')
// dotenv.config()

// const app = express()
// const port = process.env.PORT || 8080

// app.use('/', require('./src/app.routes.js'))

// app.listen (port, () => {
//     console.log(`Listening on port ${port}`);
// }) 



const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});