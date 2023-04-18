
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views' , path.join(__dirname , 'views'))

app.get('/', (req, res) => {
  res.send(`Olá, Mundo <br><a href="/news">News</a> <br><a href="/donations">Donations</a><br><a href="/downloads">Downloads</a><br><a href="/login">Login</a><br><a href="/about">Sobre</a>`)
 });

app.get('/donations', (req, res) => {
    res.send(`donations <br><a href="/">Homepage</a>`);
});

app.get('/downloads', (req, res) => {
    res.send(`downloads <br><a href="/">Homepage</a>`);
});

app.get('/news', (req, res) => {
    res.send(`
<a href='/news/breaking'>Breaking</a>
<a href="/">Homepage</a>
`);
});

app.get('/news/breaking', (req, res) => {
    res.send(` Top Notícias<br><a href="/">Homepage</a>`);
});

app.get('/about', (req, res) => {
    res.send('Sobre <br><a href="/">About</a>');
});

app.get('/login', (req, res) => {
    res.send(`
    <a href="/login/signup">SignUp</a>
    <br><a href="/login/signin">SignIn</a>
    `);
});

app.get('/login/signup', (req, res) => {
    res.send(`<br><a href="/">Homepage</a>`);
});

app.get('/login/signup/:name/:email/:passwd/:confpass', (req, res) => {
    if (req.params.passwd === req.params.confpass){
    res.send(`Your name is ${req.params.name} and your 
    email is : ${req.params.email}@gmail.com,
    <br><a href="/">Homepage</a>
    `);}
    else {
        res.send('Different password in confpass' + '<br><a href="/">Homepage</a>')
    }
});

app.get('/login/signin', (req, res) => {
    res.send(`signin <br><a href="/">Homepage</a>`);
});

app.get('/login/signin/:userid/:passwd', (req, res) => {
    res.send(`you are logged in ${req.params.userid} <br><a href="/">Homepage</a>`);
});

app.listen(port, () => {
  console.log(`Example app listening on
port ${port}`)
})