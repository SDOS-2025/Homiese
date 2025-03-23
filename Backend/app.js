
const express = require('express'); // import express
const cors = require('cors');       // import cors
require('dotenv').config();         // load env variables

const app = express();              // create express app
const PORT = process.env.PORT || 5000; // port to run server on

// Middleware (these run before routes)
app.use(cors());                    // allow cross-origin
app.use(express.json());            // parse JSON body from frontend

// Routes
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body; // get data from frontend
  console.log('Signup data received:', { username, email, password });

  // In real life: Save this to a database
  res.status(201).json({ message: 'Signup successful!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






















// const express=require('express');
// const app=express()

// const cors = require('cors');       // import cors
// require('dotenv').config(); 
// // load env variables

// const PORT = process.env.PORT || 5000; // port to run server on
// app.set('view engine','ejs')

// // Middleware (these run before routes)
// app.use(cors());                    // allow cross-origin
// app.use(express.json());   
//          // parse JSON body from frontend


// app.get('/get-sign-up-data',function(req,res){
//     console.log(res.query)
//     res.send('data has been received!')
// })

// app.get('/',function(req,res){
//     // res.send("hello world!");
//     res.render('signup')
// })

// app.get('/about',function(req,res){
//     res.send("aur bhyii aa gya swad!");
// })



// app.listen(5000);
// // npx nodemon app.js






























