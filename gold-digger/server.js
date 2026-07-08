import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./utils/getContentType.js";
import { goldPriceMonitor } from "./utils/goldPriceMonitor.js";
import { priceUpdate } from './events/priceUpdated.js';



const PORT = 8000;
let goldPrice = 4000; // sterling pound per oz

setInterval(() =>{
    goldPrice = goldPriceMonitor(goldPrice);
    console.log(goldPrice);
    priceUpdate.emit("price-updated", goldPrice)
}, 3000)

async function serveStatic(req, res, __dirname) {
    const filePath = path.join(__dirname, "public", req.url === '/'? "index.html" : req.url);

    let payload;
    try {
        payload = await fs.readFile(filePath);
        const ext = path.extname(filePath);
        res.setHeader("Content-Type", getContentType(ext));
        res.statusCode = 200;
    } catch(e) {
        if(e.code === 'ENOENT') {
            payload = await fs.readFile(path.join(__dirname, 'public', '404.html'));
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 404;
        }
    }

    res.end(payload)

}
const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) =>{

    if (req.url === "/api/price-updated") {
        //just open a SSE connection

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        priceUpdate.on("price-updated", (goldPrice) => {
            res.write(`data: ${JSON.stringify({event: 'price-updated', timeStamp: new Date(), price: goldPrice})} \n\n`)
        });
    } else {
        await serveStatic(req, res, __dirname)
    }

})

server.listen(PORT, ()=> console.log("Connected on port: ", PORT));
