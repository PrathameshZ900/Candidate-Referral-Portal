const express = require("express");
const { auth } = require("../middleware/auth");
const { ReferralModel } = require("../models/Referral");

const router = express.Router();

// Create Referral
router.post("/",auth, async (req, res) => {
    const { userId, name, email, experience, resume } = req.body;
    const referral = new ReferralModel({ userId, name, email, experience, resume });
    await referral.save();
    res.json({ message: "Referral created successfully" });
});


// Get Referrals
router.get("/",auth, async (req,res)=>{
    console.log(req.body)
    try {
        const Referrals = await ReferralModel.find({userId: req.body.userId})
        res.status(200).json({Referrals})
    } catch(error) {
        res.status(500).json({msg:"Internal server error", error})
    }
})



// Update Referral Status
router.put("/:id", async (req, res) => {
    const { status } = req.body;
    await ReferralModel.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Status updated successfully" });
});

module.exports = router;
