import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Videocard() {
  return (
    <div>
         <Card style={{ width: '18rem' }} className='mt-5 mb-5'>
      <Card.Img variant="top" height="250px" src="https://i.ytimg.com/vi/LHEU3tE_biU/maxresdefault.jpg" />
      <Card.Body>
        <div className='d-flex align-items-center justify-content-evenly'> <h6>Video Caption</h6>
        <button variant="danger" className='ms-5 btn btn-danger'>
            <i class="fa-solid fa-trash-can "></i>
        </button>
        
        </div>
        
     
      </Card.Body>
    </Card>
    </div>
  )
}

export default Videocard