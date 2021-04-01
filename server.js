'use strict'

const express = require('express');

const server = express();
const PORT = process.env.PORT || 2000;

server.use(express.static('./public'));

server.get('/', (req,res)=>{
    res.send('Hello User')
})

server.get('/test', (req,res)=>{
    res.send('your server is alive!!')
})

server.get('/data', (req,res)=>{
    let name = 'My name is Emran';
    res.send(name);
})

server.listen (PORT,()=>{
    console.log('It works!!')
})

