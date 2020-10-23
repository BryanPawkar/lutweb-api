const express = require('express'); 
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs'); 
const cors = require('cors');
const knex = require('knex');
const { json } = require('body-parser');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const profile = require('./controllers/profile');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'braco',
      database : 'lutweb'
    }
  }); 


const app = express(); 
 
app.use(bodyParser.json()); 
app.use(cors()); 

app.get('/', (req, res) =>{
    res.send(database.users);
})

app.post('/signin', (req, res) =>{
    signin.handleSignin(req, res, db, bcrypt)
})


app.post('/register', (req, res) =>{
    register.handleRegister(req, res, db, bcrypt)
})


app.get('/profile/:id', (req, res) =>{
    profile.handleProfile(req, res, db, bcrypt)
})

app.put('/image', (req, res) =>{
    image.handleImage(req, res, db, bcrypt)
})

app.listen(8000, ()=>{
    console.log('App funcionando perfectamente en puerto 8000'); 
})