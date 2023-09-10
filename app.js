const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

let port = 3000;
let server = app.listen(port,() =>{
    console.log("app started on port " + port);
} );

let io = socket(server);

io.on("connection",(socket) => {
    console.log("socket connection is made");

    socket.on("beginPath",(data) =>{
        io.sockets.emit("beginPath", data);
    })

    
    socket.on("drawStroke",(data) =>{
        io.sockets.emit("drawStroke", data);
    })

    
    socket.on("redoUndo",(data) =>{
        io.sockets.emit("redoUndo", data);
    })
})
