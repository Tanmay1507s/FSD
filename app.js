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
    try{
    res.status(200).json({
        status: "Success",
        data:{
            book: bookData
        }
    })
}
catch(error){
    res.status(404).json({
        status: "Fail",
        message: "Data not Found"
    })
}
})
app.get("/api/v1/books/:id",(req,res)=>{
    res.send(req.params.id)
    const book = bookData.find((book)=>{book.id === req.params.id})
    console.log(book);
    res.json({book: book})
    
})

// app.post("/", (req,res)=>{

// })
// app.delete("/", (req,res)=>{
    
// })
app.listen(3000, ()=>{
    console.log("Server is running...")
})