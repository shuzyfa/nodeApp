//server is a software
//different classification of servers like database server,webserver etc
//static IP need to make a server run on a  computer
//ecoSystem of Nodejs
//1) developer 2)npm  3)cloud provider
//package in nodejs written program
//node store---> npm


const express = require('express');

const app = express();

const port = process.env.port|| 5000 || process.env.port;

app.use((req,res,next)=>{
    console.log("a request came ",Date.now());
    next();
})

app.get('/check',(req,res)=>{

const amount= 5
if(amount< 10)
{
    res.send("Small Number");
}
else{
    res.send("large Number");
}

//    res.send('Hello World!');
})
app.get('/home',(req,res)=>{
    res.send("Hello User!!!");
})

app.get('/profile',(req,res)=>{
    res.send("Dear User!!!  here is your profile..");
})
 

app.listen(port,()=>{
console.log('Server is Running');

})
