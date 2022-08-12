import React, {useState, useEffect} from "react";
import 'hammerjs';
import {axiosGet} from '../../helpers/axois';
import "../../App.css";
import "../css/assets.css"
import Navbar from "../../header/admin-navbar";
import Sidebutton from "../dashboard/navbar-button";
import Footer from "../../header/footer";
import {axiosPost} from '../../helpers/axois';
// import Sidebar from '../../sidebar/sidebar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftArrow from '../../image/LeftArrow.png';



const Entity = () => {

  const [data, setData]= useState({
    entityname:"",
  })

  function submit(s){
    s.preventDefault();
    const asset = axiosPost("add_entity/",
    {
      entityname:data.entityname,
    })
    alert("Location Added Successfully")
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    console.log(newData)
    setData(newData)
  }

  const navigate = useNavigate();

  const navigateToAssets = () => {
    // 👇️ navigate to /asset
    navigate('/Assets');
  };

  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar/> */}
      <br />
      <div style={{ display: "flex" }}>
        <button onClick={navigateToAssets} className="assetbackbutton fs-4" style={{width:"20%"}}><b>
          <img src={LeftArrow} alt="Arrow" height={"35%"} style={{marginRight:"5px"}}/>
          <u>Assets/Add Entity</u></b>
        </button>
        <Sidebutton />
      </div>
      {/* <div className="asset-body" style={{ display: "flex" }}>
        
      </div> */}
    
      <div className="asset-option">
        <div className="asset-container wrapper">
        <form onSubmit={(s)=>submit(s)}>
          <fieldset style={{width:"50%"}}>
            <Row>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Entity</p>
                  <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="entityname" value={data.entityname} placeholder="Entity Name" name="name" />
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

export default Entity;