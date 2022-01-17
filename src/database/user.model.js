import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    providerId: String,
    displayName: String,
    provider: String,
    picture: String,
    locale: String,
    accessToken: String,
    refreshToken: String
})

const UserModel = mongoose.model("UserModel", userSchema, "Users");

export default UserModel;