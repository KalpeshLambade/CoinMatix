import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import router from "./router/userRouter"

const app =express();

dotenv.config()

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1',router);


mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Connection is Established"))
.catch((error)=> console.log(`Database Error: ${error}`))

app.listen(process.env.PORT, ()=> console.log(`Working on the port ${process.env.PORT}`))

