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



const Category = (props) => {
    const[category, setCategory]= useState([]);
    const {id} = useParams();
    
    
    useEffect(()=>{
        async function getAllCategory(){
        try {
            const categorydetail = await axiosGet("categories/"+id)
            console.log(categorydetail.Data)
            setCategory(categorydetail.Data)
        }
        catch(error){
            console.log(error)
        }
        }
        getAllCategory()
    }, [])

    


    const [data, setData]= useState({
        category:"",
    })

    function submit(s){
        if (data.category){
            s.preventDefault();
            const asset = axiosPut("update_category/"+id,
            {
            category:data.category,
            })
            alert("Category Updated Successfully.")
            navigate('/categories');
        }else{
            alert("Please Provide a Category!!")
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
                <u>Assets/Update Category</u></b>
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
                            {category
                            .map((cat)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Category Id: {cat.Id}</p>
                            ))}
                            </label>
                        </Col>  
                        <Col>
                            <label style={{width:"100%"}}>
                            {category
                            .map((cat)=>(
                                <p style={{background:"#dbd0d0",fontSize:"15px", border:"1px solid black", padding:"3px"}}>Category Name: {cat.Category}</p>
                            ))}
                            </label>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col>
                            <label style={{width:"100%"}}>
                                <p>Category Name</p>
                                <input style={{width:"100%"}} onChange={(e)=> handle(e)} id="category" value={data.category} placeholder="Entity Name" name="name" />
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

export default Category;