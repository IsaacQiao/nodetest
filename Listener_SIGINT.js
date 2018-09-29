
setInterval(function(){
	console.log("hello");
},500)

process.addListener("SIGINT",
		function(){
	console.log("good bye");
	process.exit(0)		
});

