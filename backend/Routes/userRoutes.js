import express from "express"
import { getUserData , postUserData , updateUserData , deleteUserData } from "../Controller/userController.js"


const router = express.Router()

router.get("/getData" , getUserData)
router.post("/postData" , postUserData)
router.put("/updateData/:id" , updateUserData)
router.delete("/deleteData/:id" ,deleteUserData )


export default router