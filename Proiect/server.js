const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const users = {};
const userProgress = {};

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    if (!users[username]) {
        users[username] = { password };
        userProgress[username] = { score: 0, currentQuestionIndex: 0 };
    }

    if (users[username].password !== password) {
        return res.status(401).send('Invalid credentials');
    }

    req.session.username = username;
    res.send('Logged in successfully');
});


app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.send('Logged out successfully');
    });
});


app.get('/progress', (req, res) => {
    const username = req.session.username;
    if (!username || !userProgress[username]) {
        return res.status(401).send('Unauthorized');
    }
    res.json(userProgress[username]);
});

app.post('/progress', (req, res) => {
    const username = req.session.username;
    if (!username || !userProgress[username]) {
        return res.status(401).send('Unauthorized');
    }

    const { score, currentQuestionIndex } = req.body;
    userProgress[username] = { score, currentQuestionIndex };
    res.send('Progress saved');
});

app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});