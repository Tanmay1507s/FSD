import fs from 'fs'
fs.watchFile("note.txt",(prev,curr)=>{
    console.log("Previous", prev)
    console.log("Current", curr)
})