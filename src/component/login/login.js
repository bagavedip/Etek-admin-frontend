import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosLoginPost } from "../../helpers/axois";
import login from '../../image/Login.png';
import logo from "../../image/sita1.png";
import powered from "../../image/powered.png";
import netrumfooter from "../../image/netrumfooter.png";
import rights from "../../image/rights.png";
import footerlogo from "../../image/Footer_logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../header/footer";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  } from "../../header/footerstyles.js";
const eye = <FontAwesomeIcon icon={faEye} />;


const Login= () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const navigate = useNavigate();

    const SubmitForm = (e) => {
      e.preventDefault();

      const body = {action:"EMAIL_LOGIN",
        payload:{ email: email, password: password }};
      const url = "login/";
      console.log(body)

      axiosLoginPost(url,body)
        .then((res) => {
          const token = res.access_token;
          console.log(token)
          localStorage.setItem('token', token)
          navigate("/assets")
        })
        .catch(error=>{
          alert("Please Enter a Valid Credential")
        })
    };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-9 col-xl-9 p-0'>
            <img src={login} alt="Login" width='99%' height='auto'/>
          </div>
          <div className='col-md-3 col-xl-3'>
            <img src={logo} alt="logo" width='30%' height='auto' style={{marginLeft:"10rem", marginTop:"7rem"}}/>
            <h2 className='text-center my-5'>Login</h2>
            <form className='form-group col-md-8' style={{marginLeft:"5rem"}} onSubmit={SubmitForm}>
              <input required
                className='form-control'
                placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
              <br/>
              <div className='form-control'>
                <input required
                    style={{border:0, width:"91%"}}
                    type={passwordShown ? "text" : "password"}
                    placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
              </div>
              <br/>
              <button type='submit' className='btn btn-primary btn-block rounded-20 w-100 ' style={{background: "#51A7C2",borderRadius: "10px"}}>Submit</button>
              <br/>
              <br />
              {/* <button
                  className='btn btn-success btn-block rounded-0 w-100'
                  type="button"
                  onClick={() => navigate('/register-host')}
              >Register </button>                                             */}
              <br/>
            </form>

            <br/>
		          <div style={{position: "fixed",right:"0", width: "24%", bottom: "20px"}}>
                <div style={{float:"left", bottom:"15px", position:"fixed"}}>
                  <img src={rights} style={{width:"100%"}} />
                </div>
                <div style={{float:"right", right:"0"}}>
                  <Column>
                    <img src={powered} style={{width:"75%", float:"right"}} />
                  </Column>
                  <div>
                    <img src={netrumfooter} style={{width:"75%", float:"right"}} />
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
