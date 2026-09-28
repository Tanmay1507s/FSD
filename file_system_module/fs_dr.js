import fs from 'fs'
//create the directory
fs.mkdir("./myFolder",(err)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("Directory created successfully")
    fs.writeFile("script.js","Hello",(err)=>{
        if(err)
        {
            console.log(err);
            return
        }
        console.log("File Created Successfully");
    })
    fs.readFile("./myFolder",(err)=>{
        if(err)
        {
            console.log(err);
            return
        }
        console.log("Files:",files);
    })
})