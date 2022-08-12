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



const Function = () => {
  const [location, setLocation] = useState([]);
  useEffect(()=>{
    async function getAllLocations(){
      try {
        const locationdetail = await axiosGet("geo_locations/")
        console.log(locationdetail)
        setLocation(locationdetail.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllLocations()
  }, [])

  const[locationid, setLocationid]= useState("");
  const[entityname, setEntityname]= useState("");
  


  const [data, setData]= useState({
    function:"",
  })

  function submit(s){
    s.preventDefault();
    const asset = axiosPost("add_function/",
    {
      function_name:data.function,
      location_id:locationid,
    })
    alert("Function Added Successfully")
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    console.log(newData)
    setData(newData)
  }
  
  function handleLocation (event){
    setLocationid(event.target.value)
  }

  function handleEntity (event) {
    setEntityname(event.target.value);
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
          <u>Assets/Add Function</u></b>
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
                  <p>Function</p>
                  <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="function" value={data.function} placeholder="Function Name" name="name" />
                </label>
              </Col>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Location</p>
                  <select value={locationid} onChange={handleLocation}>
                      <option value="">--Select Any Location--</option>
                        {location.map(loc =>(
                          <option key={loc.id} value={loc.id}>
                            {loc.location}
                          </option>
                        ))}
                  </select>
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Business Entity</p>
                  <select value={entityname} onChange={handleEntity}>
                    <option value=""> --Select a Business Entity--</option>
                    {
                      location
                      .filter((loc)=>{
                        if (loc.id == locationid){
                          return loc;
                        }
                      })
                      .map(loc => (
                      <option key={loc.id} value={loc.entity}>
                        {loc.entity}
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

export default Function;