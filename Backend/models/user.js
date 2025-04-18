import mongoose from "mongoose"
import {genSalt, hash} from "bcrypt";


const userSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true,
    unique: true,
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
    unique : true,
    minlength : [8 , "Password too short"]
  },

  firstname : {
    type : String,
    required : false,
  },

  lastname : {
    type : String,
    required : false,
  },

  role : {
    type : String,
    enum : ["Student" , "Mentor" , "Parent"],
    required : false,
  },

  collegeName : {
    type : String ,
    required : function () {
      return this.role === "Mentor"
    }
  },

  profileSetup : {
    type : Boolean,
    default : false,
  }
})


userSchema.pre('save' , async function (next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
})

const User  = mongoose.models.User || mongoose.model("User" , userSchema);
export default User;