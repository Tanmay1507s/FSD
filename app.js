import http from "http"
import fs from 'fs'
const server = http.createServer((req, res)=>{
    console.log("hello")
    res.writeHead(200,{
        "Content-Type":"application/json",
        "custom-header":"Hello"
})
    const order = {
        orderId: 123,
        ordername: "iphone"
    }
    res.end(JSON.stringify(order))
    fs.readFile("page_not_found.html")
})
const PORT = 3000
const ADDRESS = "127.0.0.1"
server.listen(PORT , ADDRESS , ()=>{
    console.log("Server is running...");
})
//status code:200 :: meaning:ok
//status code:201 :: meaning:created
//status code:404 :: meaning:page not found
//status code:500 :: meaning:internal server error
//status code:401 :: meaning:unauthorised
