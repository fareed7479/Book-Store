const express = require('express');
let path = require('path');
const cors = require('cors');
let router = require('./Routers/bookroutes');

let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));

app.use("/",router);


app.listen(3000);