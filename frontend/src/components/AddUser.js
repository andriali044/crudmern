import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [tanggallahir, setTanggallahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [negara, setNegara] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nik,
        name,
        email,
        gender,
        tanggallahir,
        alamat,
        negara,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nik</label>
            <div className="control">
              <input type="" className="input" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="Nik" />
            </div>
          </div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field" width="15px">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input type="date" className="input" value={tanggallahir} onChange={(e) => setTanggallahir(e.target.value)} placeholder="Tanggallahir" />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <textarea rows="10" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
            </div>
          </div>
          <div className="field">
            <label className="label">Negara</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={negara} onChange={(e) => setNegara(e.target.value)}>
                  <option>Indonesia</option>
                  <option>India</option>
                  <option>Amerika</option>
                  <option>Rusia</option>
                  <option>China</option>
                  <option>Germany</option>
                  <option>Ekuador</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
