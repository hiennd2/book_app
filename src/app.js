const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", socket => {
    let previousId;
  
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
      previousId = currentId;
    };
  
    // ...
  });