import "../../App.css";
import "../css/assets.css"
import EntityTable from "./entity_table";
import CButton from "../dashboard/navbar-button";
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";

const Entity = () => {

  return (
    <div className="App">
      <Navbar />
      <br />
      <div style={{ display: "flex" }}>
        <div className="subheading fs-4"><b>Assets/Entity</b></div>
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
          <EntityTable />
        </div>
      </div>
    </div>
  );
};

export default Entity;