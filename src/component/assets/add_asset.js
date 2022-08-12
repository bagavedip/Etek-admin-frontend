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



const Assets = () => {
  const [Function, setFunction] = useState([]);
  const[categorydata, setCategorydata] =useState([]);
  useEffect(()=>{
    
    async function getAllFunctions(){
      try {
        const functiondetail = await axiosGet("function_details/")
        const categories = await axiosGet("categories/")
        console.log(functiondetail.Data)
        setFunction(functiondetail.Data)
        console.log(categories.Data)
        setCategorydata(categories.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllFunctions()
  }, [])

  const[categoryid, setCategoryid] = useState();
  const[locations, setLocations] = useState([]);
  const[entityname, setEntityname] =useState("");
  const[criticality, setCriticality] =useState("");
  const[functionid, setFunctionid]=useState("");
  
  const criticalities = [
    {value:'',text:'--Select Criticalities--',},
    {value:'High', text:'High'},
    {value:'Medium',text:'Medium'},
    {value:'Critical',text:'Critical'},
  ]


  const [data, setData]= useState({
    name:"",
  })

  function submit(s){
    s.preventDefault();
    const asset = axiosPost("add_asset/",
    {
      AssetName:data.name,
      category:categoryid,
      criticality:criticality,
      function_id:functionid,
    })
    console.log(data.name,categoryid)
    alert("Asset Added Successfully")
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id]= e.target.value
    setData(newData)
  }
  
  function handleCategory (event){
    setCategoryid(event.target.value)
  }

  const handleCriticality = event => {
    setCriticality(event.target.value);
  };

  function handleLocation (event) {
    setLocations(event.target.value);
  };

  function handleEntity (event) {
    setEntityname(event.target.value);
  };


  function handlefunction(event){
    setFunctionid(event.target.value);
  }

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
          Assets/Add Assets</b>
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
                  <p>Name</p>
                  <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Asset Name" name="name" />
                </label>
              </Col>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Category</p>
                  <select value={categoryid} onChange={handleCategory}>
                      <option value="">--Select Any Category--</option>
                        {categorydata.map(cat =>(
                          <option key={cat.Id} value={cat.Id}>
                            {cat.Category}
                          </option>
                        ))}
                  </select>
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Function</p>
                  <select value={functionid} onChange={handlefunction}>
                  <option value=""> --Select any Function--</option>
                    {Function.map(func => (
                      <option key={func.Function_id} value={func.Function_id}>
                        {func.Function_name}
                      </option>
                    ))}
                  </select>
                </label>
              </Col>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Criticality</p>
                  <select value={criticality} onChange={handleCriticality}>
                    {criticalities.map(criticality => (
                      <option key={criticality.value} value={criticality.value}>
                        {criticality.text}
                      </option>
                    ))}
                  </select>
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Location</p>
                  <select value={locations} onChange={handleLocation}>
                    <option value=""> --Select a Location--</option>
                    {
                      Function
                      .filter((func)=>{
                        if (func.Function_id == functionid){
                          console.log(func)
                          return func;
                        }
                      })
                      .map(func => (
                      <option key={func.Function_id} value={func.Location}>
                        {func.Location}
                      </option>
                    ))}
                  </select>
                </label>
              </Col>
              <Col>
                <label style={{width:"100%"}}>
                  <p>Business Entity</p>
                  <select value={entityname} onChange={handleEntity}>
                    <option value=""> --Select a Business Entity--</option>
                    {
                      Function
                      .filter((func)=>{
                        if (func.Function_id == functionid){
                          console.log(func)
                          return func;
                        }
                      })
                      .map(func => (
                      <option key={func.Function_id} value={func.Entity}>
                        {func.Entity}
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

export default Assets;