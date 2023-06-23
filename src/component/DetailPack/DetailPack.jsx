import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './DetailPack.css'
import CarCardDetail from '../CarCardDetail/CarCardDetail';

const DetailPack = ({incdb,excdb,rrodb}) => {
  return (
    <Container className='detail-container'>
      <Col lg={6} sm={6} className='column-detail-1'xs={12} md={6}>
        <h1>Tentang Paket</h1>
        <Row className='detail-package' id='packInc'>
          <h1>Include</h1>
          {
            incdb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
        <Row className='detail-package' id='packExc'>
          <h1>Exclude</h1>
          {
            excdb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
        <Row className='detail-package' id='packRro'>
          <h1>Refund, Reschedule, Overtime</h1>
          {
            rrodb.map((item)=>
            <li>{item}</li>
            )
          }
        </Row>
      </Col>
      <Col lg={6} sm={6} id='detCol2'>
        <CarCardDetail />
      </Col>
    </Container>
  )
}

export default DetailPack