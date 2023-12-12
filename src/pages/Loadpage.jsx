import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function Loadpage() {
  return (
    <div className='container mb-5 mt-5'>
       <Row className='footer d-flex align-items-center justify-content-evenly '>
        <Col>
        <h3>Welcome to<span className='text-warning' ms-3> Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Repellendus animi atque iusto at illo rem totam ex vel sit molestias, 
          aspernatur alias soluta fugit, velit illum, veritatis ipsa voluptas! Quaerat.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quam deleniti sed reiciendis porro quo minima sequi explicabo, 
          nobis repellat voluptate obcaecati et tempore velit aspernatur necessitatibus officiis voluptatibus unde.</p>


     <Link to={'/Home'}>
      <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </Link>

        </Col>
        <Col className='mt-5 ms-5'><img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' style={{height:"350px"}}></img>
        </Col>
      </Row>
    <div className='container'>
      <h3>Features</h3>
      <div className='footer d-flex align-items-center justify-content-evenly mt-5 mb-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>

    </div>
    <div  className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
      <Row className='d-flex align-items-center justify-content-evenly'>
        <div className=' col-md-6'>
          <h3 className='text-warning'>simple and powerfull</h3>
          <p style={{color:"white"}}><span className='fw-bolder fs-5'>play Everything:</span> <span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Minima, quidem eveniet. Quasi, eaque, vel excepturi culpa quam, qui asperiores magnam ea reiciendis doloribus provident facilis incidunt sed esse consectetur exercitationem.</span></p>
            <p style={{color:"white"}}><span className='fw-bolder fs-5'>play Everything:</span> <span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Minima, quidem eveniet. Quasi, eaque, vel excepturi culpa quam, qui asperiores magnam ea reiciendis doloribus provident facilis incidunt sed esse consectetur exercitationem.</span></p>
            <p style={{color:"white"}}><span className='fw-bolder fs-5'>play Everything:</span> <span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Minima, quidem eveniet. Quasi, eaque, vel excepturi culpa quam, qui asperiores magnam ea reiciendis doloribus provident facilis incidunt sed esse consectetur exercitationem.</span></p>
        </div>
        <div className=' col-md-6'>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/NKX7RGZXBWc" title="Malaikottai Vaaliban - Teaser | Mohanlal | Lijo Jose Pellissery | 25th Jan 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        
      </Row>
      
    </div>
    </div>
  )
}

export default Loadpage