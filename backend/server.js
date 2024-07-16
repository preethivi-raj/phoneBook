import express from "express"
import dotenc from "dotenv"
import mongooseConnection from "./dbConnection/dbConnection.js";
import userRoutes from "./Routes/userRoutes.js"
import cors from "cors"

const app = express()
dotenc.config();
app.use(cors())
app.use(express.json())

app.use("/user" , userRoutes)


app.listen( process.env.PORT , ()=>{
    console.log(`Server is Runing on ${process.env.PORT}`)
    mongooseConnection()
} )