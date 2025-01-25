const jwt = require("jsonwebtoken")


const auth = (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            res.status(400).json({msg:"Please login first!"})
        }

        const decoded = jwt.verify(token, "Masai")
        console.log(decoded)
        req.body.userId = decoded.userId
        next()
    } catch(error){
        res.status(400).json({error})
    }
}

module.exports = {auth}