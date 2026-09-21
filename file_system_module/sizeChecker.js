import fs from 'fs'
function sizeChecker(filename){
    const stats=fs.statSync(filename)
    const limit=2*1024*1024
    if(stats.size>limit)
    {
        console.log("File name should be less than 2MB")
    }
    else{
        console.log("File has been submitted successfully");
    }
}
const sizeChecker=()=>{
    
}