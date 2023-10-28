import asyncHandler from "express-async-handler";
import Scorer from "../models/scoreModel.js"
import user from '../models/userModel.js'

export const countScore = asyncHandler(async (req, res) => {
    const { username, ansscore, category_id } = req.body;
    if (!username || !ansscore) {
        res.status(400);
        throw new Error("User or Score not found");
    }
    else if (!category_id) {
        res.status(400);
        throw new Error("Category not found..");
    }
    const userFound = await user.findOne({ "username": username });
    const reattempt = await Scorer.findOne({ "user": userFound._id, "catid": category_id });
    // const new_score = score;
    // console.log(new_score);
    if (reattempt) {
        console.log("Checking"); 
        try {
            const addscore = await Scorer.findByIdAndUpdate(reattempt._id, {
                score: ansscore,
            });
            await reattempt.save();
            res.json(addscore);
            console.log(addscore);
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {
            const addscore = await Scorer.create({
                user: userFound._id,
                score:ansscore,
                catid:category_id
            })
            // Scorer.save();
            res.json(addscore);
            console.log(addscore);
        } catch (error) {
            console.log(error)
        }
    }
});