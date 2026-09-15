const fs = require('fs').promises;

//write
async function writeFile(filePath, data, encoding){
    try{
        await fs.writeFile(filePath, data, encoding);
        console.log('File has been written using promises.');
    }
    catch(err){
        console.error('Error writing file:', err);
    }
}
writeFile('output.txt', 'This is a file write operation using promises in Node.js.', 'utf8');
writeFile('temp.txt','this is a temp file', 'utf8');

//read
async function readFile(){
    try{
        const data = await fs.readFile('output.txt', 'utf8');
        console.log('File contents:', data);
    }
    catch(err){
        console.error('Error reading file:', err);
    }
}
readFile();

//append
async function appendFile(){
    try{
        await fs.appendFile('output.txt', '\nThis line has been appended using promises.');
        console.log('File has been appended using promises.');
    }
    catch(err){
        console.error('Error appending to file:', err);
    }
}
appendFile();

//rename
async function renameFile(){
    try{
        await fs.rename('output.txt', 'renamed_output.txt');
        console.log('File has been renamed using promises.');
    }
    catch(err){
        console.error('Error renaming file:', err);
    }
}
renameFile();

//delete
async function deleteFile(){
    try{
        await fs.unlink('temp.txt');
        console.log('File has been deleted using promises.');
    }
    catch(err){
        console.error('Error deleting file:', err);
    }
}
deleteFile();