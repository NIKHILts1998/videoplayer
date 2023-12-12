import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Adds() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <div className='d-flex align-item-center'>
            <h5 >Upload New Videos</h5>
            <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2" style={{color:'white'}} onClick={handleShow}></i>
        </div>
        
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"23px"}}>
          <i class="fa-solid fa-film me-3 text-warning"></i>
          Upload Vedios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <p>please fll the following</p>
        <Form className='border border-secondary p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio id" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio caption" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video image url" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter youtube video link" />
       </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className=' btn btn-warning'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Adds