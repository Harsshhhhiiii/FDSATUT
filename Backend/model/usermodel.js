import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
         type: String, 
         unique: true,
        required: true
     },
    password: {
        type : String,
        required: true
    },
    resetPasswordToken: { 
        type: String 
    },
    resetPasswordExpires: { 
        type: Date 
    }
},{
    timestamps : true
});
const User = mongoose.model('User', userSchema);
export default User;