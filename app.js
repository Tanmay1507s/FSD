import express from 'express'

const app = express()
const data = {
    username : "Suresh",
    location : "Ghaziabad"
}
app.get("/", (req,res)=>{
    res.send(data)
})

app.post("/", (req,res)=>{

})
app.delete("/", (req,res)=>{
    
})
app.listen(3000, ()=>{
    console.log("Server is running...")
})