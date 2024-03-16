import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-white fs-3'>
          <i class="fa-solid fa-utensils fa-beat-fade fs-2 mx-3 "></i>
        Fresh Fork
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header