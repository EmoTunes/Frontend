import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './HomePg.css';
function HomePg() {
  const [arrowDirection, setArrowDirection] = useState('right');

  const toggleArrowDirection = () => {
    setArrowDirection(arrowDirection === 'right' ? 'left' : 'right');
  };

  return (
    <div>
      <div className="home-page">
      <MainLayout>
      <div className='left_bg'>
        <div className='heading'><h1>Get awesome featues<br></br>from Emoplayer </h1></div>
        <br></br>
        <div className="button-container">
        <button className="custom-button" onClick={toggleArrowDirection}>
        <span className={`arrow ${arrowDirection}`}></span>
      Join Chat</button>
    </div>
   
      <div className='flex_cont'><div className="curved-boxa">Together</div>
      <div className="curved-boxb">Manage</div>
      <div className="curved-boxc">Create</div>
      
      </div>
    </div>
      </MainLayout>
    </div>
    </div>
  )
}

export default HomePg;


