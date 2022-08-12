import "../../App.css";
import "../css/assets.css";
import AssetsTable from "../assets/asset_table";
import CButton from "../dashboard/navbar-button";
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";
import { useNavigate} from 'react-router-dom';


const Assets = () => {
  const tokendata = localStorage.token
  const navigate = useNavigate("");

  const navigatetologin =  ()=>{
    navigate("/")
  }
  if (tokendata){
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <div className="subheading fs-4"><b>Assets</b></div>
        <CButton/>
      </div>
      <div className="asset-body" style={{ display: "flex" }}>
        <button
          className="admin-nav-button" style={{ marginLeft: "10%" }}
        >
          Filter1
        </button>
        <button
          className="admin-nav-button" style={{ marginLeft: "1%"}}
        >
          Filter2
        </button>
        <button
          className="admin-nav-button" style={{ marginLeft: "1%" }}
        >
          Filter3
        </button>
      </div>
    
      <div className="asset-option">
        {/* <Button/> */}
        <div className="asset-container ">
          <AssetsTable />
        </div>
      </div>
    </div>
    
  );

  }
  else{
  return(
    <div className="App">
      <div className="asset-body" style={{ display: "flex", width:"100%", alignItems:"center", justifyContent:"center"}}>
        <div className="asset-option" style={{height:"180px", width:"205px", background:"rgb(81, 167, 194)", margin:"20px", padding:"20px"}}>
          <div className="asset-container ">
            <p>Please Login First</p>
            <button style={{padding: "11px 18px", marginLeft: "30%"}} onClick={navigatetologin}>ok</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default Assets;