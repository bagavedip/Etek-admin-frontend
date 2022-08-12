import React, { useState } from 'react';
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
import Markets from "../../src/image/1200px-Acme_Markets_lolo 1.png";

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' light className='text-center App-header'>
      <MDBContainer fluid >
      <MDBNavbarBrand href='#'>
      <img src={Markets} alt="logo" width='70%' height='auto'/>
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
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 pl-4 ml-5'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Insights
              </MDBNavbarLink>
              <MDBNavbarLink href='#'>
              OEI
              </MDBNavbarLink>
              <MDBNavbarLink href='#'>RoSI</MDBNavbarLink>
              <MDBNavbarLink href='#'>Risk</MDBNavbarLink>
              <MDBNavbarLink ><MDBIcon icon='search' fas /></MDBNavbarLink>
            
            
              <MDBNavbarLink className='navbar-right' href='#'> CSO Sigifredo Hernandez </MDBNavbarLink>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

