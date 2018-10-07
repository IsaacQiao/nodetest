var http = require("http");

http.createServer(function(req,res){
    res.writeHeader(200,{"Content-Type":"text/plain"});
    // res.sendDate("Hellow worrld");
    res.write("ok\r\n");
    // do something else and get back 2s later
    setTimeout(function(){
        res.end("2s later ok again\r\n")
    },2000);
}).listen(8000, function() { //'listening' listener
console.log('server bound');
}); 