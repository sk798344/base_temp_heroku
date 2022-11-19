const mongoose = require('mongoose');


// const connectDB=mongoose.connect("mongodb+srv://samdemo:samdemo%40123@cluster0.jxoew.mongodb.net/studentdb").then(()=>{
// 	console.log('connected');
// });

//////////base_temp123

const connectDB=mongoose.connect("mongodb+srv://base_temp123:base_temp123@cluster0.huqh4zx.mongodb.net/base_temp").then(()=>{
	console.log('connectedlive');
});


// const connectDB=()=>{
// 	try{
// 		const DB_OPTIONS={
// 			dbName:'base_temp'
// 		}
// 		 mongoose.connect('mongodb://localhost:27017',DB_OPTIONS)

// 	}catch(err){
// 		console.log(err)
// 	}
// }
//connectDB()



module.exports={connectDB}
