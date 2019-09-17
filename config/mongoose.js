// defining database and loading all models

// var mongoose= require('mongoose')
// var fs= require('fs')

// var username = "user21";
// var password = "hZXZ45V45%40";

// var url ="mongodb+srv://"+username+":"+password+"@cluster0-tql1t.mongodb.net/test";
// //connect to the database
// mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
// //load all model files
// var model_path = __dirname + "/../models";
// fs.readdirSync(model_path).forEach(function(file){
//     if(file.indexOf('.js')>0){
//         require(model_path+'/'+file);
//     }
// });