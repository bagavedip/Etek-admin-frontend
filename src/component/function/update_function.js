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



const Function = (props) => {
    const [locationid, setLocationid]= useState("");
    const[entityname, setEntityname]= useState("");
    const {id} = useParams();
    const [funcname, setFuncname] = useState([]);
    const [location, setLocation] = useState([]);
    
    
    useEffect(()=>{
        async function getAllLocations(){
        try {
            const functiondetail = await axiosGet("function_details/?id="+id)
            const locationdetails = await axiosGet("geo_locations")
            console.log(locationdetails.Data)
            setLocation(locationdetails.Data)
            setFuncname(functiondetail.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllLocations()
    }, [])

    


    const [data, setData]= useState({
        function:"",
    })

    function submit(s){
        if (data.function){
            if (locationid){
                s.preventDefault();
                const asset = axiosPut("update_function/"+id,
                {
                function_name:data.function,
                location_id:locationid,
                })
                alert("Function Added Successfully")
            }else{
                alert("Please Select a Location")
            }
        }else{
            alert("Please Provide a Function Name")
        }
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
            
            <div className="asset-option">
                <div className="asset-container wrapper">
                <form onSubmit={(s)=>submit(s)}>
                <fieldset style={{width:"50%"}}>
                
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                            {funcname
                            .map((func)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Function Id: {func.Function_id}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {funcname
                            .map((func)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Function Name: {func.Function_name}</p>
                            ))}
                            </label>
                    
                        </Col>
                        
                    </Row>
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
                                    {location.map((loc) =>(
                                    <option key={loc.id} value={loc.id}>
                                        {loc.location}
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