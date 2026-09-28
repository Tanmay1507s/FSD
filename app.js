import express from 'express'
import fs from 'fs'
const app = express()
//const data = {
 //   username : "Suresh",
//    location : "Ghaziabad"
//}
const bookData = fs.readFileSync("./data/books.json","utf8")
console.log(bookData);
app.get("/api/v1/books", (req,res)=>{
    res.send(bookData)
})

// app.post("/", (req,res)=>{

// })
// app.delete("/", (req,res)=>{
    
// })
app.listen(3000, ()=>{
    console.log("Server is running...")
})