const fs = require('fs')
fs.watch("notes.txt", (eventType, filename)=>{
    console.log("Event: ", eventType)
    console.log("Filename", filename)
})