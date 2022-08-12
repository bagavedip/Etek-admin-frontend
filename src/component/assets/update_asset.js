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



const Asset = (props) => {
    const {id} = useParams();
    const [funcname, setFuncname] = useState([]);
    const [functionid, setFunctionid] = useState("");
    const [assets, setAssets] = useState([]);
    const [category, setCategory] = useState([]);
    const [categoryid, setCategoryid] = useState("");
    const [criticality, setCriticality] = useState("");
    
    
    useEffect(()=>{
        async function getAllLocations(){
        try {
            const assetdetail = await axiosGet("asset/"+id)
            const categorydetail = await axiosGet("categories/")
            const functiondetail = await axiosGet("function_details/")
            setAssets(assetdetail.Data)
            setCategory(categorydetail.Data)
            setFuncname(functiondetail.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllLocations()
    }, [])

    const criticalities = [
        {value:'',text:'--Select Criticalities--',},
        {value:'High', text:'High'},
        {value:'Medium',text:'Medium'},
        {value:'Critical',text:'Critical'},
      ]

    


    const [data, setData]= useState({
        asset:"",
    })

    function submit(s){
        if (data.asset){
            if (categoryid){
                if (functionid){
                    if(criticality){
                        s.preventDefault();
                        const asset = axiosPut("update_asset/"+id,
                        {
                        AssetName:data.asset,
                        criticality:criticality,
                        function_id:functionid,
                        category:categoryid,
                        })
                        alert("Asset Updated Successfully")
                        navigate('/assets');
                    }else{
                        alert("Please Select a Criticality")
                    }
                }else{
                    alert("Please Select a Function")
                }
            }else{
                alert("Please Select a Criticality")
            }
        }else{
            alert("Please Provide a Asset Name")
        }
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id]= e.target.value
        console.log(newData)
        setData(newData)
    }
    
    function handleCategory (event){
        setCategoryid(event.target.value)
    }

    function handleFunction (event){
        setFunctionid(event.target.value)
    }

    function handleCriticality (event){
        setCriticality(event.target.value)
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
                <u>Assets/Update Asset</u></b>
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
                            {assets
                            .map((asset)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Asset Id: {asset.id}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {assets
                            .map((asset)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Asset Name: {asset.Asset_Name}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {assets
                            .map((asset)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Asset Category: {asset.Category}</p>
                            ))}
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                            {assets
                            .map((asset)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Criticality: {asset.Criticality}</p>
                            ))}
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            {assets
                            .map((asset)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Function Name: {asset.Function_Name}</p>
                            ))}
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                                <p>Asset</p>
                                <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="asset" value={data.asset} placeholder="Asset Name" name="name" />
                            </label>
                        </Col>
                        <Col>
                            <label style={{width:"100%"}}>
                            <p>Category</p>
                            <select value={categoryid} onChange={handleCategory}>
                                <option value="">--Select Any Category--</option>
                                    {category.map((cat) =>(
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
                            <select value={functionid} onChange={handleFunction}>
                                <option value="">--Select Any Function--</option>
                                    {funcname.map((func) =>(
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
                                <option value="">--Select Any Criticality--</option>
                                    {criticalities.map((criticality) =>(
                                    <option key={criticality.value} value={criticality.value}>
                                        {criticality.text}
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

export default Asset;