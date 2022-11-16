const mongoose = require('mongoose');


// const connectDB=mongoose.connect("mongodb+srv://samdemo:samdemo%40123@cluster0.jxoew.mongodb.net/studentdb").then(()=>{
// 	console.log('connected');
// });


const connectDB=()=>{
	try{
		const DB_OPTIONS={
			dbName:'base_temp'
		}
		 mongoose.connect('mongodb://localhost:27017',DB_OPTIONS)

	}catch(err){
		console.log(err)
	}
}
connectDB()
module.exports={connectDB}
