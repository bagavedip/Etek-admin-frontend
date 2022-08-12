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



const Location = () => {
  const [entity, setEntity] = useState([]);
  useEffect(()=>{
    async function getAllLocations(){
      try {
        const entitydetail = await axiosGet("entities/")
        console.log(entitydetail.Data)
        setEntity(entitydetail.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllLocations()
  }, [])

  const[entityid, setEntityid]= useState("");
  


  const [data, setData]= useState({
    location:"",
  })

  function submit(s){
    s.preventDefault();
    const asset = axiosPost("add_location/",
    {
      location:data.location,
      entity_id:entityid,
    })
    alert("Location Added Successfully")
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    console.log(newData)
    setData(newData)
  }

  function handleEntity (event) {
    setEntityid(event.target.value);
  };

  const navigate = useNavigate();

  const navigateToAssets = () => {
    // 👇️ navigate to /contacts
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
          <u>Assets/Add Location</u></b>
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
                  <p>Location</p>
                  <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="location" value={data.location} placeholder="Location Name" name="name" />
                </label>
              </Col>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Entity</p>
                  <select value={entityid} onChange={handleEntity}>
                      <option value="">--Select Any Location--</option>
                        {entity.map(ent =>(
                          <option key={ent.id} value={ent.id}>
                            {ent.entityname}
                          </option>
                        ))}
                  </select>
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

export default Location;