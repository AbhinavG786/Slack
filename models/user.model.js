import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
