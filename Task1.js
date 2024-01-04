const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/cursive"});
    res.end("Hello I am going to Task 1")
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , () => {
    console.log("Server running on port 3000")
})