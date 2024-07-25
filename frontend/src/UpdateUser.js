import React, { useState } from 'react'
import api from './api/api.js'
import { updateUser } from './Slice/userDataSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllData } from './Slice/userDataSlice.js'
import toast from 'react-hot-toast'


const UpdateUser = () => {
    const {id}  = useParams()

    const users = useSelector(selectAllData)

    const user = users.find((user)=>{
        return user.id === id
    })

    const [name , setName] = useState(user.name)
    const [email , setEmail] = useState(user.email)
    const [phoneNumber , setPhoneNumber] = useState(user.phoneNumber)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()

        try {
            await api.put("/updateData/"+id , {
                name ,
                email ,
                phoneNumber
            })
            toast.success("Updated Successfully")
            dispatch(updateUser({id , name , email , phoneNumber}))
            navigate("/")

        } catch (error) {
            console.log("Error in post data in api" ,error)
            toast.error(error.response.data.message)
        }
    }
  return (
    <div className="card bg-neutral text-neutral-content w-96">
    <h2 className="flex justify-center font-semibold text-2xl p-3 text-orange-300 ">Update User</h2>
     <form className='App' onSubmit={handleSubmit} >
         <div>
         <label htmlFor="name" className="font-serif">Enter the name</label>
         <input 
           value={name}
           onChange={(e)=>setName(e.target.value)}
          type="text" 
          className="input input-bordered input-warning w-full max-w-xs"
          />
         </div>

         <div className='p-2'>
         <label htmlFor="email" className="font-serif">Enter the Email</label>
         <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          type="text" 
          className="input input-bordered input-warning w-full max-w-xs"
          />
         </div>

         <div className='ml-7'>
         <label htmlFor="phoneNumber" className="font-serif">Enter the Phone Number</label>
         <input
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          type="text" 
          className="input input-bordered input-warning w-full max-w-xs"
          />
         </div>
 
        <div className='p-2'>
        <button className="btn btn-outline  btn-secondary">Update</button>
         
        </div>
     </form>
  </div>
  )
}

export default UpdateUser