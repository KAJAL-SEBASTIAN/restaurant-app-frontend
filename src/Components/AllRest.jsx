import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestCard from './RestCard';

function AllRest() {

const base_url="https://restaurant-app-backend-qq3v.onrender.com/restaurants"

const [AllRestData,setAllRestData] = useState([])

const fetchData=async()=>{
  const result = await axios.get(base_url)
  console.log(result.data);
  setAllRestData(result.data)
}

console.log(AllRestData);

useEffect(()=>{
  fetchData()
},[])

  return (
    <div>
      <Row>
        {
          AllRestData.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3} >
        <RestCard restaurants={item} />
          </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default AllRest