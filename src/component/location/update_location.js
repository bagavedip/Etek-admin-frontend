import React, {useState, useEffect} from "react";
import 'hammerjs';
import {axiosGet, axiosPut} from '../../helpers/axois';
import "../../App.css";
import "../css/assets.css"
import Navbar from "../../header/admin-navbar";
import Sidebutton from "../dashboard/navbar-button";
import Footer from "../../header/footer";
import {useNavigate, useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftArrow from '../../image/LeftArrow.png';



const Location = (props) => {
    const[entity, setEntity]= useState([]);
    const[entityid, setEntityid]= useState("");
    const {id} = useParams();
    const [location, setLocation] = useState([]);
    
    
    useEffect(()=>{
        async function getAllLocations(){
        try {
            const locationdetail = await axiosGet("geo_locations/"+id)
            const entitydetails = await axiosGet("entities")
            console.log(locationdetail.Data)
            setLocation(locationdetail.Data)
            setEntity(entitydetails.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllLocations()
    }, [])

    


    const [data, setData]= useState({
        location:"",
    })

    function submit(s){
        if (data.location){
            if (entityid){
                s.preventDefault();
                const asset = axiosPut("update_function/"+id,
                {
                location:data.location,
                entity_id:entityid,
                })
                alert("Location Updated Successfully")
                navigate("/location");
            }else{
                alert("Please Select an Entity")
            }
        }else{
            alert("Please Provide a Location Name")
        }
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id]= e.target.value
        console.log(newData)
        setData(newData)
    }
    
    function handleEntity (event){
        setEntityid(event.target.value)
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
                <u>Assets/Update Location</u></b>
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
                            {location
                            .map((loc)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Location Id: {loc.id}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {location
                            .map((loc)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Location Name: {loc.location}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {location
                            .map((loc)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Entity: {loc.entity}</p>
                            ))}
                            </label>
                        </Col>
                    </Row>
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
                                <option value="">--Select Any Entity--</option>
                                    {entity.map((ent) =>(
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