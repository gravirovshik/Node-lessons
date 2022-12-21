const fs = require('fs');
const path = require('path');

/* fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if(err) {
        throw err;
    }

    console.log('Папка создана');
}) */

const filepath = path.join(__dirname, 'test', 'text.txt');

/* fs.writeFile(filepath, 'Hello NodeJS', err =>{
    
        if(err) {
            throw err;
        }
    
        console.log('Файл создан');

        fs.appendFile(filepath, '\nHello again', err =>{
    
            if(err) {
                throw err;
            }
        
            console.log('Файл создан');
    
    })

}) */

fs.readFile(filepath, (err, content) =>{

    if (err) {
        throw err;
    }

    console.log('Content: \n' + content);
})
