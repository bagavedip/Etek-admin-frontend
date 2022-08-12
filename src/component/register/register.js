import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../helpers/axois";
import login from '../../image/Login.png';

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitForm = (e) => {
    e.preventDefault();

    const body = {
      firstName: firstname,
      lastName: lastname,
      user_name: username,
      email: email,
      password: password,
    };
    const url = "users/users/";

    

    axiosPost( url,body).then((data) => {
      if (data.status === 200 && data.msg === "host registered successfully") {
        alert("login sucess");
      } else {
        alert("Error will be handled over here...");
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-md-8 col-xl-8">
          <img src={login} alt="Login" width='100%' height='auto'/>
          </div>
          <div className="col-md-4 col-xl-4 mt-5">
          <h2 className="text-center my-5">Register </h2>
            <form className="form-group" onSubmit={SubmitForm}>
              <input
                className="form-control"
                placeholder="Enter First Name"
                onChange={(e) => setFirstname(e.target.value)}
              ></input>
              <br />
              <input
                className="form-control"
                placeholder="Enter Last Name"
                onChange={(e) => setLastname(e.target.value)}
              ></input>
              <br />
              <input
                className="form-control"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <br />
              <input
                className="form-control"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <input
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />
              <button
                type="submit"
                className="btn btn-success btn-block rounded-0 w-100"
              >
                Register
              </button>
              <br />
              <br />
              <button className="btn btn-primary btn-block rounded-0 w-100" onClick={() => navigate('/')}>
                Login
              </button>
              <br />

              <br />
            </form>
            <br />
          </div>
          <div className="col-md-4 col-xl-4"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
