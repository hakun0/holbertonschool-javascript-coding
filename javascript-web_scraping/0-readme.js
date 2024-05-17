const fs = require('fs');

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }
        console.log(data);
    });
}

// Example usage:
const filePath = 'example.txt'; // Replace 'example.txt' with the path to your file
readFile(filePath);
