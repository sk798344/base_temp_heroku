const express=require('express');
const app=express();
const env=require('dotenv').config()
const port=process.env.PORT || '3000'   
const connectDB=require('./db/connectdb.js')   
const session = require('express-session');
const { join } = require('path');
var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer();

app.use(express.urlencoded({extended:false}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(session({
	name:'base_temp',
  secret: 'test',
	resave:false,
	saveUninitialized:true,
}))

app.set('view engine','ejs')

//////// for static files
//app.use(express.static(join(process.cwd(),'public')))

app.use('/static', express.static(__dirname + "/public"))

const web=require('./routes/web.js');

app.use('/',web)

app.listen(port,()=>{
	console.log('its running on 3000');
})
