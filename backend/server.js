import express from "express"
import dotenc from "dotenv"
import mongooseConnection from "./dbConnection/dbConnection.js";
import userRoutes from "./Routes/userRoutes.js"
import cors from "cors"
import path from "path"



const app = express()

const  __dirname = path.resolve()
dotenc.config();
app.use(cors())
app.use(express.json())


app.use("/user" , userRoutes)


if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname , "/frontend/build")))
    app.get("*" , (req , res)=>{
        res.sendFile(path.join(__dirname , "/frontend/build/index.html"))
    })
}

app.listen( process.env.PORT , ()=>{
    console.log(`Server is Runing on ${process.env.PORT}`)
    mongooseConnection()
} )