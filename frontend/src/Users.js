import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, selectAllData } from "./Slice/userDataSlice";
import { Link } from "react-router-dom";
import api from "./api/api.js";
import toast from "react-hot-toast";

const Users = () => {
  const users = useSelector(selectAllData);
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    try {
      await api.delete("/deleteData/" + id);
      toast.success("Deleted Successfully");
      dispatch(deleteUser({ id }));
    } catch (error) {
      console.log("Error in delete in data in api", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="card bg-neutral text-neutral-content card-side">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-lg" key={232}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>

              {
               users.map((user) => {
                    return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                        <Link to={`/edit/${user.id}`}>
                            <button className="btn btn-success">Update</button>
                        </Link>
                        </td>
                        <td>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="btn btn-error" >Delete
                        </button>
                        </td>
                    </tr>
                    );
                })
              }

            </tbody>
          </table>
        </div>
      </div>
      <div className="flex p-4 justify-end">
        <Link to="addData">
          <button className="btn btn-accent">Add ++</button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
