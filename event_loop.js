import fs from 'fs'
import process  from 'process'
fs.readFile("intro.txt","utf8",(err,data)=>{
    setTimeout(()=>{
    console.log("SetTime Out inside fs");
},0)
setImmediate(()=>{
    console.log("set Immediate inside fs");
})
console.log("Files data read completed");
})
process.nextTick(()=>{
    console.log("nextTick");
})