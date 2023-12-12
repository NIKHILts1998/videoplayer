import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';

function View() {
  return (
    <div>
        <div>
            <Row>
                <Col sm={12} md={6} lg={4} x1={3}>
                    <Videocard/>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default View;