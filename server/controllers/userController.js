import User from "../models/userModel.js"
import bycrypt from "bcryptjs"

const signupUser = async(req,res)=>{
        try {
          const {name,email,username,password} = req.body;
          const user = await User.findOne({$or:[{email},{username}]}); 
          
          if(user){
            return res.status(400).json({message:"User Already Registered"});
          }
            const salt = await bycrypt.genSalt(10);
          const hashedPassword = await bycrypt.hash(password,salt)

          const newUser =new User ({
            name,
            email,
            username,
            password: hashedPassword,
          })
await newUser.save()

if(newUser){ 
    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
})
} else{
    res.status(400).json({message:"Invalid User Data"})
}
        } catch (error) {
            res.status(500).json({message: err.message});
            console.log("Error in signing up:" ,err.message);
        }
}


export {signupUser}