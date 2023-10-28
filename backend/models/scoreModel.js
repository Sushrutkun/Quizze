import mongoose from 'mongoose'

const scoreSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId, ref: 'User',
        required: [true, "Unknown test"]
    },
    score: {
        type: Number,
        required: [true,"Provide certain score"],
        default: 0
    },
    catid:{
        type:Number,
        required:[true,"Give a category id"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    });

const schema = mongoose.model('score', scoreSchema);
export default schema;