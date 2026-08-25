import fs from 'fs'
setTimeout(()=>{
    console.log("SetTime Out");
})
fs.readFile("intro.txt","utf8",(err,data)=>{
    console.log("File data read completed");
})
setInterval(()=>{
    console.log("set Interval");
},1000)
setImmediate(()=>{
    console.log("set Immediate");
})