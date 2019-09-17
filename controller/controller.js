// var mongoose= require('mongoose')
// var {check,validationResult} =require('express-validator/check')

// var User= mongoose.model('User')
//all crud application and validation 

// function createUser(req,res,next) {
//     const user= new User(req.body);
//     console.log(user.password);
//     user.password= user.hashpassword(user.password)
//     var errors= validationResult(req);
//     if(!errors.isEmpty()){
//         //return errors found
//         return res.send({errors:errors.mapped()})
//     }else{
//         user.save((err)=>{
//             if(err){
//                 console.log("error saving user",user);
//                 return next();
//             }else{
//                 res.json({ok:true})
//             }
//         })
//     }
// }
// function getall(req,res) {
//     User.find({},['id','name','email','password'],(err,users)=>{
//         if(err){
//             console.log("Error occured")
//             return next();
//         }
//             else{
//                 res.json(users)
//         }
//     })  
// }
// function getuser(req,res,next) {
//         User.find({name:req.params.name},(err,user)=>{
//             if(user===null){
//                 res.json({err:"not found"});
//             }
//             if(err || !user){
//                 console.log("user not found");
//                 return next();
//             }else{
//                 res.json(user);
                
//             }
            
//         });
// }
// function getcons(req,res) {
    
//     res.json({ok:"ok"});
//     // res.json({node:"hello"})
// }
// function register(req,res) {
//     const data=new Data(req.body);
//     data.save((err)=>{
//         if(err){
//             console.log("Err occured");
//         }else{
//             res.json({"ok":true});
//         }
//     });
// }
// module.exports = {
//     createUser,
//     getall,
//     getuser,
//     getcons,
//     register
// }