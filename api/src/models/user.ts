import { model, Schema, Document } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const User = model<UserDocument>("User", userSchema);
