const fs=require("fs")
//1. Create the file
fs.writeFile("notes.txt","FS module started",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File written successfully");
})
//2. Read the file
fs.readFile("notes.txt",(err,data)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(data);
})
//3. Append file content 
fs.appendFile("notes.txt","This data is append in the last",(err)=>{
    if(err)
    {
        console.log("Data is appended successfully");
    }
})
//4. Delete the file asynchronously
fs.rm("notes.txt",(err)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("File Deleted Successfully");
})