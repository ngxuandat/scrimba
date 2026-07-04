import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./utils/getContentType.js"



const PORT = 8000;

const server = http.createServer(async (req, res) =>{

    const __dirname = import.meta.dirname;

    async function serveStatic(req, res, __dirname) {
        const filePath = path.join(__dirname, "public", req.url === '/'? "index.html" : req.url);
        const ext = path.extname(filePath);
        res.setHeader("Content-Type", getContentType(ext));
        res.statusCode = 200;

        const payload = await fs.readFile(filePath)

        res.end(payload)

    }
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, ()=> console.log("Connected on port: ", PORT));
