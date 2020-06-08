const express = require('express');
const app = express(),
      util = require('util'),
      testJson = require('./test/test.json');
      
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    //res.send("Hello NodeJS!!");
    // res.json(testJson);
    res.render('index',{name:'홍길동'});
});

app.get('/test/:email', (req, res) => {
    testJson.email = req.params.email;  // cf. req.body, req.query
    testJson.aa = req.query.aa;
    res.json(testJson);
});

const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});


const io = require('socket.io').listen(server, {
      log: false,
      origins: '*:*',
      pingInterval: 3000,
      pingTimeout: 5000
});
io.sockets.on('connection', (socket, opt) => {
    socket.emit('message', {msg: 'Welcome!!' + socket.id});
    util.log("connection>>",socket.id, socket.handshake.query);
    socket.on('join', function(roomId, fn) {
      socket.join(roomId, function(){
          util.log("join", roomId,  Object.keys(socket.rooms));
      });
    });
    socket.on('leave', function(roomId, fn) {
        socket.leave(roomId, function(){
            if(fn)
            fn();
        });        
    });
    socket.on('rooms', function(fn) {
        if(fn)
         fn(Object.keys(socket.rooms));
    });      
    socket.on('message', (data, fn) => {
      util.log("message>>", data.msg, Object.keys(socket.rooms));
    });
    socket.on('disconnecting', function(data) {
        util.log("disconnting>>",socket.id, Object.keys(socket.rooms));
    });
    socket.on('disconnect', function(data) {
        util.log("discont>>",socket.id, Object.keys(socket.rooms));
    });
});
    