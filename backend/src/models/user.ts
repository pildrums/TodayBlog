import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 화살표 함수를 사용할 경우 this 구문 사용 못함 (주의!)
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

const User = mongoose.model("User", UserSchema);

export default User;
