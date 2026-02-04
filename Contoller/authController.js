const userSchema = require("../model/user");
const jwt = require("jsonwebtoken");
const dotenv= require('dotenv')
dotenv.config();
const secret=process.env.secret
const bcrypt = require("bcrypt");
const signup = async (req,res)=>{
try {
    let token= null;
    const {name,email,pass} = req.body;
const user  = await userSchema.findOne({email:email})
if(user){
    return res.status(400).json({message : "user already exists"})

}
const hashedPass = await bcrypt.hash(pass,10);

newUser = await userSchema.create({
    name:name,
    email:email,
    password:hashedPass
})
if(!newUser){
    return res.status(500).json({message : "something went wrong"})
}
try{
 token = jwt.sign({id:newUser._id},secret)

}catch(err){
await userSchema.findByIdAndDelete(newUser._id);
throw err;

}
res.status(201).json({msg:"user Created succesfully",token:token})
    
} catch (error) {
console.log(error);    
return res.status(500).json({message : error.message})
}
}

const login = async (req,res)=>{
    const {email,pass} = req.body;
    const user = await userSchema.findOne({email:email})
    if(!user){
        return res.status(400).json({message : "email doesnt exist"})
    }

    const isMatch = await bcrypt.compare(pass,user.password);
if(!isMatch){
return res.status(400).json({message : "invalid credentials"})
}
    const token = jwt.sign({id:user._id},secret)

return res.status(200).json({message : "login succesfull"})
 

}
module.exports={signup,login}