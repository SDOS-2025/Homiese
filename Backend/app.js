
const express=require('express');
const cors=require('cors');

const app=express()
const PORT=5000;


app.use(cors())
// it is going to allow the frontend to talk to backend

app.use(express.json());


app.post('/api/signup',(req,res)=>{
  const user={fullname,email,password,confirmPassword}=req.body;
  console.log("received signup data");
  console.log(fullname,email,password,confirmPassword)
  console.log(user)
  console.log("data received successfully!")

});

app.listen(PORT,()=>{
  console.log("server is running on port 5000");
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






























