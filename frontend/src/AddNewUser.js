import React, { useState } from 'react'
import api from './api/api.js'
import { addUser } from './Slice/userDataSlice.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddNewUser = () => {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [phoneNumber , setPhoneNumber] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            const response =await api.post("/postData" , {
                name ,
                email ,
                phoneNumber
            })

            dispatch(addUser(response.data))
            navigate("/")

        } catch (error) {
            console.log("Error in post data in api" ,error)
        }
    }

  return (
    <div className="card bg-neutral text-neutral-content w-96" >
    <h2 className="flex justify-center font-semibold text-2xl p-3 text-green-400 ">Add New User</h2>
     <form className='App' onSubmit={handleSubmit} >
         <div>
         <label htmlFor="name"  className="font-serif ">Enter the name</label>
         <input 
           value={name}
           onChange={(e)=>setName(e.target.value)}
           className="input input-bordered input-success w-full max-w-xs"
          type="text" 
          
          />
         </div>

         <div className='p-2'>
         <label htmlFor="email" className="font-serif">Enter the Email</label>
         <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           className="input input-bordered input-success w-full max-w-xs"
          type="text" 
          />
         </div>

         
         <div className='ml-7'>
         <label htmlFor="phoneNumber" className="font-serif">Enter the Phone Number</label>
         <input
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          className="input input-bordered input-success w-full max-w-xs"
          type="text" 
          />

         </div>
          <div className='p-2'>
          <button className="btn btn-outline btn-secondary">Add</button>
          </div>
         
     </form>
  </div>
  )
}

export default AddNewUser
