// require a TCP module
// var tcp = require("net");

// // create a server object, tcp server
// var a = tcp.createServer();

// // add a listener for connection event
// a.addListener("connection",
//     function (c){// connection
//         // c: the object we get for each connection event
//         console.log("server connected");
//         c._destroy
// });

// // start listening
// a.listen(8000);

var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  // when user connect the server.
  console.log('server connected');
  
  // when user quit the server connection
  c.on('end', function() {
    console.log('server disconnected');
  });
  
  // write to the client
  c.write('hello\r\n');

  // noidea why need pipe
  c.pipe(c);
}).listen(8124, function() { //'listening' listener
  console.log('server bound');
});

// server.listen(8124, function() { //'listening' listener
//   console.log('server bound');
// });