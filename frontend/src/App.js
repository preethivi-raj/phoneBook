import { useEffect } from "react";
import Users from "./Users";
import api from "./api/api.js"
import {useDispatch}  from "react-redux"
import { getUser } from "./Slice/userDataSlice.js";
import {BrowserRouter ,Route , Routes} from "react-router-dom"
import AddNewUser from "./AddNewUser.js";
import UpdateUser from "./UpdateUser.js";

function App() {
  const disptach = useDispatch()
     useEffect( ()=>{
      const fetchData  = async ()=>{
         try {
          const response = await api.get("/getData");
         
          disptach(getUser(response.data))

         } catch (error) {
          console.log("Error in fecth data in App JS " , error)
         }
      }
      fetchData()
     },[])
  return (
    <div className="App font-mono">
      <h1 className="flex justify-center font-semibold text-4xl p-4 mb-2 text-violet-400 ">Contact Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/addData" element={<AddNewUser/>}/>
          <Route path="/edit/:id" element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
