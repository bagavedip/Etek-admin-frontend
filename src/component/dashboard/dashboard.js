import "../../App.css";
import DoughnutChart from "./doughnut";
import CButton from "./navbar-button";
import Navbar from "../../header/navbar";
import StaticAssets from "./staticAssets";
// import Sidebar from '../../sidebar/sidebar';
import { MDBBtn, MDBCheckbox,MDBSwitch } from "mdb-react-ui-kit";

const Dashboard = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar/> */}
      <br />
      <div className="subheading fs-4"><b>Insights Hub</b></div>
      <div className="option">
        <MDBBtn outline className="mx-2" color="link">
          Date Range
        </MDBBtn>
        <MDBBtn className="text-dark" color="light">
          Use Case
        </MDBBtn>
        <MDBBtn className="text-dark" color="light">
          Assets
        </MDBBtn>
        <MDBBtn className="text-dark" color="light">
          Entity
        </MDBBtn>
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
      <div className="container ">
        <DoughnutChart />
      </div>
      <div>
        <StaticAssets/>
      </div>
      {/* <MDBSwitch  id='flexSwitchCheckDefault' label='Summary'/> */}
    </div>
  );
};

export default Dashboard;
