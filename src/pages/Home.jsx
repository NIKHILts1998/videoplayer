import React from 'react';
import { Link } from 'react-router-dom';
import Adds from '../Components/Adds';
import View from '../Components/View';
import Category from '../Components/Category';

function Home() {
  return (
    <div>
    <div className='container  mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='add_vedios'>
        <Adds/>
        {/* Content for add_vedios */}
      </div>

      <div className='mt-5'>
        <Link to='/Watchhistory' style={{ textDecoration: "none", color: "white", fontSize: "30px",  }}>
          Watch History
        </Link>
      </div>
      
      </div>

      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='all-vedios col-md-6 mt-5'>
          
          <h4>All vedios</h4>
          <View/>
        </div>
        <div>
        <Category/>
      </div>
      </div>
    </div>
  );
}

export default Home;
