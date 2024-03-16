import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';
 import './ViewRest.css';
function ViewRest() {


// //get id of particular restaurant
// const pathParams = useParams()//Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
// console.log(pathParams.id);//object  {id: 1}
//Destructuring
const {id} = useParams()
console.log(id);

const base_url="https://restaurant-app-backend-qq3v.onrender.com/restaurants"

const [restDetails,setRestDetails] = useState({})

//Api call to fetch the particular restaurant details
  const fetchRestDetails = async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }

  console.log(restDetails);

  useEffect(()=>{
    fetchRestDetails()
  },[])

  return (
    <div>
        <Row>
          <Col>
          <img src={restDetails.photograph} height={'550px'} width={'450px'} className='m-4' alt="" />
          </Col>
          <Col className='m-5 p-5'>
          <ListGroup className='m-5 RestListGroup'>
            <h1>{restDetails.name}</h1>
      <ListGroup.Item className='RestListGroupItem'>Address : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item className='RestListGroupItem'>Cuisine-type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item className='RestListGroupItem'>Neighborhood : {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item className='RestListGroupItem'> <RestOp op={restDetails.operating_hours}/> </ListGroup.Item>
      <ListGroup.Item className='RestListGroupItem'> <RestReview review={restDetails.reviews}/> </ListGroup.Item>
    </ListGroup>
          </Col>
        </Row>
    </div>
  )
}

export default ViewRest