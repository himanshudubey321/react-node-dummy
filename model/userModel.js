// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
// const bcrypt= require('bcrypt')
// const UserSchema = new Schema({
//     name:{
//         type: String
//     },
//     email:{
//         type: String
//     },
//     password:{
//         type: String
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now
//     }
// });

// //add method to models
// var salt =bcrypt.genSaltSync(10);
// UserSchema.methods.hashpassword=function(password){
//     return bcrypt.hashSync(password,salt)
// }
// UserSchema.methods.comparepassword=function(password,hashpassword){
//     return bcrypt.compareSync(password,hashpassword)
// }
// mongoose.model('User',UserSchema);
