import asyncHandler from "express-async-handler";
import Scorer from "../models/scoreModel.js"
import user from '../models/userModel.js'

export const countScore = asyncHandler(async (req, res) => {
    const { username, score, category_id } = req.body;
    if (!username || !score) {
        res.status(400);
        throw new Error("User or Score not found");
    }
    else if (!category_id) {
        res.status(400);
        throw new Error("Category not found..");
    }
    const userFound = await user.findOne({ "username": username });
    const reattempt = await Scorer.findOne({ "user": userFound._id, "catid": category_id });
    if (reattempt) {
        try {
            const addscore = await Scorer.findByIdAndUpdate(reattempt._id, {
                score: score,
            });
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
                score,
                catid:category_id
            })
            res.json(addscore);
            console.log(addscore);
        } catch (error) {
            console.log(error)
        }
    }
});