const express = require('express');
const app = express();
const port=process.env.PORT||4500;
require('./src/db/connection');
const Register=require('./src/models/register');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static( 'views'));
app.use('/css',express.static(__dirname + 'views/css'));
app.use('/JS',express.static(__dirname + 'views/JS'));
app.use('/images',express.static(__dirname + 'views/images'));
app.set('view engine', 'ejs');


app.get(['/', '/signup'], (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.post('/',async(req,res)=>{
    try{
       const password=req.body.pass1;
       const cpassword=req.body.pass2;
    if(password==cpassword){
       const registerUser= new Register({
           name:req.body.name,
           mobileno:req.body.mobileno,
           email:req.body.email,
           username:req.body.username,
           pass1:password,
           pass2:cpassword
       })
       const registered = await registerUser.save();
       res.status(201).render('signup');
    }else{
        res.send('passwords are not matching');
    }

    }catch(err){
        res.status(404).send(err);
    }
});

app.post('/login',async(req,res)=>{
try{
  const username=req.body.username;  
  const userpassword=req.body.pass1;

  const name= Register.findOne({username:username});
  if(name.pass1===userpassword){
   res.status(201).render('index');
  }else{
      res.send('Invalid entered Details');
  }
}catch(err){
    res.status(400).send('Invalid Login Details');
}
});

app.get('*',(req, res) => {
    res.render('error');
});

app.listen(port,()=>{
    console.log(`Server runnning at ${port}` );
});