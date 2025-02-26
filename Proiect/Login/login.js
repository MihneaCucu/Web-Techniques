const fs = require('fs');
fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading users.json:', err);
        return;
    }

    const users = JSON.parse(data);

 
    const username = prompt('Enter your username:');

    
    if (users.hasOwnProperty(username)) {
        console.log('Login successful!');
    } else {
        console.log('Invalid username!');
    }
});