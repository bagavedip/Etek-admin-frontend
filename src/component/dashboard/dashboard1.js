import React,{Component} from "react";
import Checkbox from "../chechbox";
import Button from "../dropdown/dropdown";
import "../../App.css";
import DoughnutChart from "./doughnut";
import CButton from "./navbar-button";
import Navbar from "../../header/navbar";
import StaticAssets from "./staticAssets";
// import Sidebar from '../../sidebar/sidebar';
import { MDBBtn, MDBCheckbox,MDBSwitch } from "mdb-react-ui-kit";


export default class Dashboard1 extends Component{
  state = {
    // text: '',
    // number: '',
    // email: '',
    // country: '',
    // message: '',
    rejected: false,
    acceptance: true,
  };
  handleCheckbox = (acceptance) => {
    this.setState({acceptance});
  };
  render() {
    const {acceptance, rejected} = this.state;
    return (
        <div className="App">
          <Navbar />
          {/* <Sidebar/> */}
          <br />
          <div className="subheading fs-4"><b>Insights Hub</b></div>
          <div className="option">
            <div className="inner-container">
            <MDBBtn outline className="mx-2" color="link">
                Date Range
            </MDBBtn>
            <MDBBtn className="" color="light">
            Use Case
            </MDBBtn>
            <MDBBtn className="" color="light">
            Assets
            </MDBBtn>
            <MDBBtn className="" color="light">
            Entity
            </MDBBtn>
            </div>
            <br/>
            <div className="d-inline-flex">
            <Checkbox
            label='Entity'
            selected={acceptance}
            onChange={this.handleCheckbox}
            /></div>
            <div className="d-inline-flex">
            <Checkbox
            label="Geo"
            selected={rejected}
            onChange={this.handleCheckbox}
            /></div>
            <div className="d-inline-flex">
            <Checkbox
            label="Function"
            selected={rejected}
            onChange={this.handleCheckbox}
            /></div>
            <div className="d-inline-flex">
            <Checkbox
            label="Assets"
            selected={rejected}
            onChange={this.handleCheckbox}
            /></div>
            <div className="d-inline-flex">
            <Checkbox
            label="Process"
            selected={rejected}
            onChange={this.handleCheckbox}
            /></div>
            <div className="d-inline-flex">
            <Checkbox
            label="Criticality"
            selected={rejected}
            onChange={this.handleCheckbox}
            /></div>
          </div>
        </div>
    );
  }
}