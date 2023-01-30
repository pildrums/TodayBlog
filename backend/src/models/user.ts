import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  username: string;
  hashedPassword: string;
}

interface IUserDocument extends IUser, Document {
  setPassword: (password: string) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
  serialize: () => void;
}

interface IUserModel extends Model<IUserDocument> {
  findByUsername: (username: string) => Promise<IUserDocument>;
}

const UserSchema = new Schema<IUserDocument>({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

// 화살표 함수를 사용할 경우 this 구문 사용 못함 (주의!)
UserSchema.methods.setPassword = async function (password: string) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.statics.findByUsername = function (username: string) {
  return this.findOne({ username });
};

const User = mongoose.model<IUserDocument, IUserModel>("User", UserSchema);

export default User;
