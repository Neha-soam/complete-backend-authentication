import mongoose from 'mongoose'
import { refreshToken } from '../controllers/auth.controller.js'
const sessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true


    },
    refreshToken:{
        type:String,
        required:true
    },
    ip:{
        type:String,
        required:true
    },
    userAgent:{
        type:String,
        required:true,
    },
    revoke:{
        type:Boolean,
        default:false
    },

},
{
    timestamps:true
}
)
const sessionModel = mongoose.model("sessions",sessionSchema);
export default sessionModel;