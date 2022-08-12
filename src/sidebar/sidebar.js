import React, {useState, useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, 
    //SubMenu
 } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {axiosGet} from '../helpers/axois';


export default function Sidebar() {
  const [incident, setIncident] = useState('');
  const [responseTime, setResponseTime] = useState('');

  useEffect(() => {
    // axiosGet("incident_priority/")
    axiosGet("request_mode/")
    .then((res) => {
        console.log("res");
        setIncident(res.Total_Incident);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosGet("average-response/")
      .then((res) => {
        setResponseTime(res.Average_Response_Time);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem >{incident} Incident</MenuItem>
    <MenuItem >False Postive</MenuItem>
    <MenuItem >92K Breach Cost</MenuItem>
    <MenuItem >130K Rosi</MenuItem>
    <MenuItem >04 Atrack types</MenuItem>
    <MenuItem >{responseTime} hrs response time</MenuItem>
    {/* <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu> */}
  </Menu>
</ProSidebar>
)}