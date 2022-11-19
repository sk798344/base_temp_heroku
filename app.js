const express=require('express');
const app=express();
//const port=process.env.PORT || '443'   

const port=app.set('port', (process.env.PORT || 5000)); 

const connectDB=require('./db/connectdb.js')   
const session = require('express-session');
const { join } = require('path');

app.use(express.urlencoded({extended:false}))

app.use(session({
	name:'base_temp',
  secret: 'test',
	resave:false,
	saveUninitialized:true,
}))

app.set('view engine','ejs')

//////// for static files
app.use(express.static(join(process.cwd(),'public')))

const web=require('./routes/web.js');

app.use('/',web)

app.listen(port,()=>{
	console.log('its running on 3000');
})
