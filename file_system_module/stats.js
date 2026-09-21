import fs from 'fs';
fs.stat("notes.txt",(err,stats)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log("Information of[notes.txt]",stats);
    console.log("Size of the file:",stats.size);
    console.log("Creation Time:",stats.birthtimeMs.toISOString().split("t"[0]));
    console.log("Modification Time of the File:",stats.mtime.toISOString());
    console.log("Access Time of the File:",stats.atimeMs.toISOString());
    console.log("Change Time of the File:",stats.ctimeMs.toISOString());
})
console.log("Is this is a File:",stats.isFile());