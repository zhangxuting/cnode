
var express = require('express');

var app = express();

var router = require('./router');


app.listen(3000,()=>{
    console.log('成功了');
})