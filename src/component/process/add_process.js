import React, {useState, useEffect} from "react";
import 'hammerjs';
import "../../App.css";
import "../css/assets.css"
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";
import {axiosPost} from '../../helpers/axois';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebutton from '../dashboard/navbar-button';
import LeftArrow from '../../image/LeftArrow.png';



const Process = () => {

  const url =""

  const [data, setData]= useState({
    name:"",
  })

  function submit(s){
    s.preventDefault();
    
    const asset = axiosPost("add_process/",
    {
      process:data.name,
    })
    alert("Data added Successfully")
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    setData(newData)
    console.log(newData)
  }

  const navigate = useNavigate();

  const navigateToAssets = () => {
    // 👇️ navigate to /Assets
    navigate('/Assets');
  };

  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar/> */}
      <br />
      <div style={{ display: "flex" }}>
        <button onClick={navigateToAssets} className="assetbackbutton fs-4" style={{width:"20%"}}>
          <b><img src={LeftArrow} alt="Arrow" height={"31%"} style={{marginRight:"5px"}}/>
          Assets/Add Process</b>
        </button>
       <Sidebutton />
      </div>
    
      <div className="asset-option">
        <div className="asset-container wrapper">
        <form onSubmit={(s)=>submit(s)}>
          <fieldset style={{width:"50%"}}>
            <Row>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Process Name</p>
                  <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Process Name" name="name" />
                </label>
              </Col>
            </Row>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Process;