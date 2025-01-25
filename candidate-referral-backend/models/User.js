const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
});
const UserModel = mongoose.model("User", userSchema);
module.exports = {UserModel};