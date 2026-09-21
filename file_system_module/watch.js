const fs = require('fs')
fs.watch("note.txt", (eventType, filename)=>{
    console.log("Event: ", eventType)
    console.log("Filename", filename)
})