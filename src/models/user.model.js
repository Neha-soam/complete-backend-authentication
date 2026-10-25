import { mongoose } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: boolean,
    default: false,
  },
});
const userModel = mongoose.model("users", userSchema);
export default userModel;
