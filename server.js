const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("url");
const formidable = require("formidable");

const server = http.createServer(function(req, res) {

        //req.method //get post
        console.log(req.METHODS)
});

server.listen(8080, function() {
    console.log("listening to port 8080");
}) 