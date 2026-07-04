import http from "node:http";


const PORT = 8000;

const server = http.createServer((req, res) =>{
    res.end("server up and working")
})

server.listen(PORT, ()=> console.log("Connected on port: ", PORT));
