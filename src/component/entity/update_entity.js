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



const Entity = (props) => {
    const[entityname, setEntityname]= useState([]);
    const {id} = useParams();
    
    
    useEffect(()=>{
        async function getAllEntity(){
        try {
            const entitydetail = await axiosGet("entities/"+id)
            console.log(entitydetail.Data)
            setEntityname(entitydetail.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllEntity()
    }, [])

    


    const [data, setData]= useState({
        entity:"",
    })

    function submit(s){
        if (data.entity){
            s.preventDefault();
            const asset = axiosPut("update_entity/"+id,
            {
            entityname:data.entity,
            })
            alert("Entity Updated Successfully")
            navigate('/entity')
        }else{
            alert("Please Provide an Entity!")
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
                <u>Assets/Update Entity</u></b>
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
                            {entityname
                            .map((ent)=>(
                                <p key={ent.id} style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Entity Id: {ent.id}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {entityname
                            .map((ent)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Entity Name: {ent.entityname}</p>
                            ))}
                            </label>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                                <p>Entity Name</p>
                                <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="entity" value={data.entity} placeholder="Entity Name" name="name" />
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