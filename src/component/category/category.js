import "../../App.css";
import "../css/assets.css"
import CategoryTable from "./category_table";
import Sidebutton from "../dashboard/navbar-button";
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";

const Category = () => {

  return (
    <div className="App">
      <Navbar />
      <br />
      <div style={{ display: "flex" }}>
        <div className="subheading fs-4"><b>Assets/Category</b></div>
        <Sidebutton/>
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
          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default Category;