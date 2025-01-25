const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: Number, required: true },
    resume: { type: String , required: true }, // Store file path or link
    status: { type: String, default: "New" ,required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required:true},
});
const ReferralModel = mongoose.model("Referral", referralSchema); 
module.exports = {ReferralModel};
