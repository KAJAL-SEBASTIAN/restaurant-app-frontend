import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './RestCard.css';

function RestCard({restaurants}) {
console.log(restaurants);//data - parent to child data passing 


  return (
    <div>
    <Link style={{textDecoration:'none'}} to={`view/${restaurants.id}`}>
    <MDBCard  className='RestCard mx-3 my-4' style={{height:'420px'}}>
      <MDBCardImage src={restaurants.photograph} height={'300px'} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{restaurants.name}</MDBCardTitle>
        <MDBCardText>
          {restaurants.address}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </Link>
    </div>
  )
}

export default RestCard