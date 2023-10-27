import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const dbConnection = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
          })
          console.log("DB connected sucessfully..")
    }  catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnection;
