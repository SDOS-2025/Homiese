import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
  },
  password : {
    type : String,
    required : true,
    unique : true,
    minlength : [8 , "Password too short"]
  }
})

const User  = mongoose.models.User || mongoose.model("User" , userSchema);
export default User;