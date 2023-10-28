import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from "./config/dbConnection.js";
import { loginUser, registerUser } from "./controllers/userController.js";
import { countScore } from "./controllers/scoreController.js";

dotenv.config();

dbConnection();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// cors global
app.use(cors());

// api routes
app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/score',countScore);

app.listen(port, () => {
    console.log("http://localhost:5000/");
    console.log(`Listening on port-> ${port}`);
})


