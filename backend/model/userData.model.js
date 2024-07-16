import mongoose, { Schema } from "mongoose";

const userDataSchema = new Schema({
    name : {
        type : String 
    },
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    }
},{timeseries : true})

const userData = mongoose.model("UserData" , userDataSchema)

export default userData ;