import fs from 'fs/promises'
async function readFileContent(filename){
    const data=await fs.readFile(filename,"utf-8")
    console.log(data);
}
readFileContent("notes.txt")
async function writeFilemethod(filename,content){
    await fs.writeFile(filename,content)
}
writeFilemethod("notes.txt","Hello World")