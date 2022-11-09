import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Userlist.css";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-2">
      <div className=" column is-half">
        <div className="container">
          <div className="sidareja">
            <div className="field">
              <label className="label">Nik</label>
              <div className="control">
                <input type="text" className="input" placeholder="Nik" />
              </div>
            </div>
            <div className="fieldname">
              <label className="label">Nama</label>
              <div className="control">
                <input type="text" className="input" placeholder="Nik" />
              </div>
            </div>
          </div>
        </div>
        <div className="addnew mt-7">
          <div className="column is-half">
            <Link to="add" className="button is-success">
              Add
            </Link>
            <div className="column is-half">
              <Link to="Search" className="button is-success">
                Search
              </Link>
            </div>
            <div className="tabel">
              <table className="table is-striped is-fullwidth mt-1">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nik</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Tanggal Lahir</th>
                    <th>Alamat</th>
                    <th>Negara</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.nik}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.tanggallahir}</td>
                      <td>{user.alamat}</td>
                      <td>{user.negara}</td>
                      <td>
                        <Link to={`edit/${user._id}`} className="button is-info is-small mr-1">
                          Edit
                        </Link>
                        <button onClick={() => deleteUser(user._id)} className="button is-danger is-small ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserList;
