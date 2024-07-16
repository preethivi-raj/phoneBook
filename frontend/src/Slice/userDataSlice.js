import { createSlice} from "@reduxjs/toolkit";


const initialState ={
    users : []
}


const userDataSlice = createSlice (
    {
        name :"users",
        initialState : initialState,
        reducers : {
            getUser :(state , action)=>{
                const data = action.payload
                state.users= data.map((u)=>{
                    return( {
                        id :u._id,
                        name : u.name,
                        email : u.email,
                        phoneNumber : u.phoneNumber
                    })
                })
            },
            addUser :(state , action )=>{
                state.users.push(action.payload)
            },
            updateUser :(state , action)=>{
                
                const index=state.users.findIndex( (user)=> user.id === action.payload.id )
                state.users[index] = {
                    id :action.payload.id,
                    name : action.payload.name,
                    email : action.payload.email,
                    phoneNumber : action.payload.phoneNumber
                }
            },
            deleteUser : (state , action)=>{
                const id = action.payload.id ;
                state.users = state.users.filter((user)=> user.id !== id)
            }
        }
    }
)

export const selectAllData = (state)=>state.users.users;

export const {getUser ,addUser , updateUser ,deleteUser } = userDataSlice.actions

export default userDataSlice.reducer