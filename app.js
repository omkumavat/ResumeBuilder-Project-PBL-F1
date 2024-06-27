const express = require('express');
const app = express();
const path = require('path');
const proutes = require('./Router/information');
const bodyParser = require('body-parser');
const register = require('./models/register'); // Assuming this is your User model
require('./db/conn');

const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '..', 'src', 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    const nm="Login";
    res.status(201).render('index',{nm}); // Render the combined form file
});

app.get('/login', (req, res) => {
    res.status(201).render('2signup'); // Render the combined form file
});

app.post('/signup', async (req, res) => {
    try {
        const newUser = new register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            // Include other required fields
        });
        const savedUser = await newUser.save();
        res.status(201).redirect('/login'); // Redirect to login page after signup
    } catch (error) {
        console.log(error);
        return res.render('2signup', { error: 'Invalid username or password' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userData = await register.findOne({ username: username });
        
        const nm=username;
        // console.log(unm);
        if (!userData || userData.password !== password || username === " " || password === "" || !username || !password) {
            return res.render('2signup',{ error: 'Invalid username or password' });
        } else {
            res.render('index', { nm: username });
        }
    } catch (error) {
        console.log(error);
        return res.render('2signup', { error: 'Invalid username or password' });
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(proutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
