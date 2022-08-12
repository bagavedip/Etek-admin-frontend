import "../../App.css";
import DoughnutChart from "./doughnut";
import Button from "../button/button";
// import CButton from "./button";
import Navbar from "../../header/admin-navbar";
import Footer from "../../header/footer";
import StaticAssets from "./staticAssets";
// import Sidebar from '../../sidebar/sidebar';
import { MDBBtn, MDBCheckbox,MDBSwitch } from "mdb-react-ui-kit";

const Dashboard = () => {
  const onButtonClick = (name) => {
    alert(`${name} button clicked!`)
   }
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar/> */}
      <br />
      <div className="subheading fs-4"><b>Monitoring</b></div>
      <div className="option">
        {/* <Button/> */}
        <div className="inner-container">
        <Button name="Insights" size="medium" onClick= {onButtonClick}/>
        <Button name="OEI" size="medium" onClick= {onButtonClick} />
        <Button name="ROSI" size="medium" onClick={onButtonClick} />
        <Button name="Risk" size="medium" onClick={onButtonClick} />
        </div>
      </div>
      <hr/>
      <div className="subheading fs-4"><b>Insights Hub</b></div>
      <div className="option">
        <div className="inner-container">
          <Button name="Date Range" size="medium" onClick= {onButtonClick}/> 
          <Button name="Use Case" size="medium" onClick= {onButtonClick} />
          <Button name="Asset" size="medium" onClick={onButtonClick} />
          <Button name="Entity" size="medium" onClick={onButtonClick} />
        </div>
        <br />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox1"
          value="option1"
          label="Entity"
          inline
        />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox2"
          value="option2"
          label="Geo"
          inline
        />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox2"
          value="option2"
          label="Functions"
          inline
        />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox2"
          value="option2"
          label="Assets"
          inline
        />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox2"
          value="option2"
          label="Process"
          inline
        />
        <MDBCheckbox
          name="inlineCheck"
          id="inlineCheckbox2"
          value="option2"
          label="Criticality"
          inline
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
