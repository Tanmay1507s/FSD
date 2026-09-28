import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    if(req.method === "GET" && req.url ==='/'){
        res.end("Home Page")
    }
    else if(req.method === "POST" && req.url === "/")
        {
            res.end("Object Added")
        }
        else{
            res.end("Page not Found")
        }
})
server.listen(3000,()=>{
    console.log("Server Running......")
})