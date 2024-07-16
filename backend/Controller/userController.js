import userData from "../model/userData.model.js"

export const getUserData =  async (req , res)=>{
    try{
        const userDatas = await userData.find()
        if(!userDatas) {
           return  res.status(400).json({message : "User Data Not Available"})
        }

        res.status(200).json(userDatas)

    }catch(error){
        console.log("Error in getUserData Controller : " , error.message);
        res.status(500).json({ message : "Internal Server Error"})
    }
}

export const postUserData = async (req , res)=>{
    
    try{
        const {name , email , phoneNumber} = req.body

        const existingName = await userData.findOne( {name :name})
        if(existingName){
            return res.status(400).json("Already this name used.");
        }

        const existingEmail = await userData.findOne({email : email})
        if(existingEmail){
            return res.status(400).json("Already this email used.");
        }

        const existingPhoneNumber = await userData.findOne({phoneNumber : phoneNumber})
        if(existingPhoneNumber){
            return res.status(400).json("Already this Phone Number used.");
        }       


        const newUserData  = new userData( {
            name : name ,
            email : email,
            phoneNumber : phoneNumber
        })

        if(newUserData){
           await newUserData.save();
           res.status(200).json({
            name : newUserData.name,
            email : newUserData.email,
            phoneNumber : newUserData.phoneNumber
           })
        }
        else{
            res.status(400).json("User Data is not Vaild Formate.")
        }

    }catch(error){
        console.log('Error in post User data Controller : ' , error.message)
        res.status(500).json({ message : "Internal server Error"})
    }
}


export const updateUserData =async (req , res)=>{
    try {
        const id = req.params.id;
        const {name , email , phoneNumber} = req.body
        const userUpdate = await userData.findByIdAndUpdate({_id :id} ,{
            name : name ,
            email:email,
            phoneNumber :phoneNumber
        })
        
        const newUpdatedUserDate =await userData.find({_id :id})
        if(userUpdate){
           res.status(200).json(newUpdatedUserDate) 
        }
        else{
            res.status(400).json({message: "user Data not update"})
        }
    } catch (error) {
        console.log('Error in update User data Controller : ' , error.message)
        res.status(500).json({ message : "Internal server Error"})      
    }
}

export const deleteUserData =async (req , res)=>{
    try {
        const id = req.params.id;
        const deletData = await userData.findByIdAndDelete({_id : id})
        if(deletData){
            res.status(200).json({message :"user Data Deleted"})
        }
        else{
            res.status(400).json({message : "User Data Cannot be Deleted"})
        }
    } catch (error) {
        console.log('Error in Delete User data Controller : ' , error.message)
        res.status(500).json({ message : "Internal server Error"}) 
    }
}