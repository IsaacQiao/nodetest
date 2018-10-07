// file IO is usually non-blocking
// like file read/write
// if block. gonna shut down the server when disk read/write.
// but for node, since there will be call back after response.
// wont blocking the server while loading the disk.
var stat = require("posix").stat,
    puts = require("sys").puts;

var promise = stat("/etc/password");

promise.addCallback(function(s){//callback when stat is completed
    // promise obj will be returned for all the file operation.
    // event emitter that emits a success or error event
    puts("modified".s.mtime);
});