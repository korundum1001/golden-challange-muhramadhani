import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './DetailPack.css'
import CarCardDetail from '../CarCardDetail/CarCardDetail';

const DetailPack = ({incdb,excdb,rrodb}) => {
  return (
    <Container id='detCont'>
      <Col id='detCol1'xs={12} md={6}>
        <h1>Tentang Paket</h1>
        <Row className='packDet' id='packInc'>
          <h1>Include</h1>
          {
            incdb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
        <Row className='packDet' id='packExc'>
          <h1>Exclude</h1>
          {
            excdb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
        <Row className='packDet' id='packRro'>
          <h1>Refund, Reschedule, Overtime</h1>
          {
            rrodb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
      </Col>
      <Col id='detCol2'>
        <CarCardDetail />
      </Col>
    </Container>
  )
}

export default DetailPack