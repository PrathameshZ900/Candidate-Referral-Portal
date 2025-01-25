const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://prathamesh:prathameshZ900@cluster0.nvkwe.mongodb.net/ReferralApp?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to MongoDB")
    } catch(err) {
        console.log(err)
    }
}

module.exports = {connectDB}
