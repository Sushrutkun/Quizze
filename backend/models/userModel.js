import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add Username"]
    },
    email: {
        type: String,
        required: [true, "Please add Email"]
    },
    password: {
        type: String,
        required: [true, "Add a Password"]
    },
    profPic: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    }
);
const schema = mongoose.model('User', UserSchema);
export default schema
