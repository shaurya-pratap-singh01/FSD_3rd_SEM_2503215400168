//EXPERIMENT 2
const fs = require('fs');

// Synchronous file write
fs.writeFileSync('output.txt', 'Hello, this is a synchronous file write operation in Node.js.', 'utf8');

console.log('File has been written synchronously.');

// Synchronous file read
const data = fs.readFileSync('output.txt', 'utf8');
console.log('File contents:', data);

// Synchronous file append(update)
fs.appendFileSync('output.txt', '\nThis line has been appended synchronously.');
console.log('File has been appended synchronously.');

// Synchronous file delete
fs.unlinkSync('sp.txt');
console.log('File has been deleted synchronously.');

// Synchronous file rename
// fs.renameSync('output.txt', 'renamed_output.txt');
// console.log('File has been renamed synchronously.');

// // Synchronous file copy
// fs.copyFileSync('renamed_output.txt', 'copied_output.txt');
// console.log('File has been copied synchronously.');

// // Synchronous file stats
// const stats = fs.statSync('copied_output.txt');
// console.log('File stats:', stats);

// Synchronous file existence check
const exists = fs.existsSync('output.txt');
if(exists){
    console.log('The file exists.');
} else {
    console.log('The file does not exist.');
}

// folder create
// fs.mkdirSync('sample folder');
// console.log('new folder created');

// delete folder
// fs.rmdirSync('sample folder');
// console.log('folder deleted');

