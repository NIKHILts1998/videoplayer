import React from 'react'
import {Link} from 'react-router-dom';

function Foot() {
  return (
    <>
    <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5'>
        <div style={{width:"400px"}}>
     <h5><i class="fa-solid fa-video text-warning me-4 "></i>Media Player </h5>
     <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic consequatur harum pariatur veritatis nihil ut voluptatem ratione perferendis, nesciunt praesentium illo itaque libero obcaecati velit illum nam non distinctio dolore.</h6>
        </div>
<div>
<h4>Links</h4>

<Link to={'/'} style={{textDecoration:"none"}}>
<h6>Loadpage</h6>
</Link>
<Link to={'/Watchhistory'} style={{textDecoration:"none"}}>
<h6>Watch history</h6>
</Link>
<Link to={'/Home'}style={{textDecoration:"none"}} >
<h6>Home page</h6>
</Link>
</div>


<div>
<h4>Guides</h4>
<h6>React</h6>
<h6>React Bootstrap</h6>
<h6>Bootwatch</h6>
</div>
<div>
    <h4>Contact us</h4>
    <div className='d-flex' >
        <input type="text" name='' id='' placeholder='enter your email' className='form-control' />
        <button className='btn btn-warning ms-2'>Subscribe</button>

    </div >
    <div className='d-flex mt-3 w-100'>
    <h4><i class="fa-brands fa-instagram ms-5"></i></h4>
    <h4><i class="fa-brands fa-twitter ms-5" ></i></h4>
    <h4><i class="fa-brands fa-linkedin ms-5"></i></h4>
    <h4><i class="fa-brands fa-facebook ms-5"></i></h4>
    </div>
</div>
    </div>
    <div className='text-center'>
        <p>Copyright &#169; 2023.Media playe built with React</p>
    </div>
    </>
  )
}

export default Foot