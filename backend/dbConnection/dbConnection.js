import mongoose  from "mongoose";


const mongooseConnection = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }
    catch(error){
        console.error("Error in MongoDB Connections", error.message);
        process.exit(1);
    }
}

export default mongooseConnection;