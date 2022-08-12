import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import logo from "../../src/image/netrum.png";
import user from "../../src/image/Face.png";
import search from "../../src/image/Search.png";
import setting from "../../src/image/setting.png";
import "../App.css"

export default function Navbar() {

  const navigate = useNavigate();

  const navigateToAssets = () => {
    // 👇️ navigate to /asset
    navigate('/Assets');
  };

  const removeitem = () =>{
    localStorage.removeItem("token")
    navigate('/')
  }
  // const navigateToDashboard = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/admin-dashboard');
  // };
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' light className='text-center App-header'>
      <MDBContainer fluid >
      <MDBNavbarBrand href='#'>
      <img src={logo} alt="logo" width='100%' height='auto'/>
      </MDBNavbarBrand>
      <MDBNavbarToggler
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNavText(!showNavText)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
        {/* <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler> */}
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto pl-4 ml-3'>
              {/* <MDBNavbarLink active aria-current='page' href='' onClick={navigateToDashboard}>
                Monitoring
              </MDBNavbarLink> */}
              <MDBNavbarLink href='' classnName="navbarlink" width={"auto"} onClick={navigateToAssets} >
              Assets
              </MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#' >Set Risks</MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#'  >Data Migrations</MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" ><MDBIcon icon='search' fas /></MDBNavbarLink>
              
              <MDBNavbarLink classnName="navbarlink" href='#' className='navbar-right'>
                <img src={setting} alt="search" width='100%' height='auto'/>
              </MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#'>
                <img src={search} alt="search" width='100%' height='auto'/>
              </MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#'>
                <img src={user} alt="user" width='100%' height='auto'/>
              </MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#'> Admin </MDBNavbarLink>
              <MDBNavbarLink classnName="navbarlink" href='#' onClick={removeitem}> Log Out </MDBNavbarLink>
              
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

