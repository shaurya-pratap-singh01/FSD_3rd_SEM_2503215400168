const fs = require('fs');

// Asynchronous file write
fs.writeFile('output.txt','welcome to asynchronous file write operation in node.js', (err) => {
    if(err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('file created successfully');
});

fs.writeFile('temp.txt', 'this is a temporary file for asynchronous operations', (err) => {
    if(err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Temporary file created successfully');
});

// Asynchronous file read
fs.readFile('output.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});


// Asynchronous file append (update)
fs.appendFile('output.txt', '\nThis line has been appended asynchronously.', (err)=>{
    if(err){
        console.error('Error appending to file:', err);
        return;
    }
    else{
        console.log('File has been appended asynchronously.');
    }
});

// Asynchronous file delete
fs.unlink('temp.txt', (err) => {
    if(err){
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully.');
});