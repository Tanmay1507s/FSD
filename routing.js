import http from 'http'
import fs from 'fs'

const data = fs.readFileSync("./page_not_found.html","utf-8")
const config = 
const server = http.createServer((req,res)=>{
    //res.end("Welcome from server")
    if(req.url === "/"){
         res.write(200,{
            "Content-Type":"text/plain"
        })
        res.end("Home Page")
    }
    else if(req.url === "/contact"){
         res.write(200,{
            "Content-Type":"text/plain"
        })
        res.end("Contact Page")
    }
    else if(req.url === "/projects"){
         res.write(200,{
            "Content-Type":"text/plain"
        })
        res.end(config)
    }
    else{
        res.write(404,{
            "Content-Type":"text/html"
        })
        res.end(data)
    }
})

server.listen(3000,()=>{
    console.log("Server is Running.....");
})