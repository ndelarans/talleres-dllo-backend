import { model, Schema } from "mongoose";

type UserType = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  hobbies: string[];  
};

const UserSchema = new Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hobbies: { type: [String], required: true }
});

const UserModel = model<UserType>("User", UserSchema);

// EXPORT ALL
export { UserModel, UserSchema, UserType };
