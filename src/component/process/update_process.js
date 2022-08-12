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



const Process = (props) => {
    const[processname, setProcessname]= useState([]);
    const {id} = useParams();
    
    
    useEffect(()=>{
        async function getAllProcess(){
        try {
            const processdetail = await axiosGet("process_details/"+id)
            console.log(processdetail.Data)
            setProcessname(processdetail.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllProcess()
    }, [])

    


    const [data, setData]= useState({
        process:"",
    })

    function submit(s){
        if (data.process){
            s.preventDefault();
            const process = axiosPut("update_process/"+id,
            {
            process:data.process,
            })
            alert("Process Updated Successfully");
            navigate('/process');
        }else{
            alert("Please Provide a Process")
        }
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id]= e.target.value
        console.log(newData)
        setData(newData)
    }

    const navigate = useNavigate();

    const navigateToAssets = () => {
        // 👇️ navigate to /contacts
        navigate('/assets');
    };

    return (

        <div className="App">
            
            <Navbar />
            {/* <Sidebar/> */}
            <br />
            <div style={{ display: "flex" }}>
                <button onClick={navigateToAssets} className="assetbackbutton fs-4" style={{width:"20%"}}><b>
                <img src={LeftArrow} alt="Arrow" height={"35%"} style={{marginRight:"5px"}}/>
                <u>Assets/Update Process</u></b>
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
                            {processname
                            .map((proc)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Process Id:{proc.Id}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {processname
                            .map((proc)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Process Name:{proc.Process}</p>
                            ))}
                            </label>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                                <p>Process Name</p>
                                <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="process" value={data.process} placeholder="Process Name" name="name" />
                            </label>
                        </Col>
                    </Row>
                </fieldset>
                <button type="submit">Update</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Process;