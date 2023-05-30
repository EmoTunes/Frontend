import React ,{useState}from 'react'
import './Landing.css'
import MainLayout from '../../components/MainLayout/MainLayout'

function Landing() {
    const [arrowDirection, setArrowDirection] = useState('right');

  const toggleArrowDirection = () => {
    setArrowDirection(arrowDirection === 'right' ? 'left' : 'right');
  };

  return (
    <div>
      
  <MainLayout>
 
    <div>
      <div className="home-page">
     
      <div className='left_bg'>
        <div className='heading'><h1>Get awesome features<br></br>from Emoplayer!!</h1></div>
        <br></br>
        <div className='line'><h3>“Music gives a soul to the universe,<br></br> wings to the mind, flight to the imagination,<br></br> and life to everything.”</h3></div>
        <div className="button-container">
        <button className="custom-button" onClick={toggleArrowDirection}>
        <span className='gg-arrow-long-right'></span>
      Join Chat</button>
    </div>
   
     
    </div>
    
    </div>
    </div>
    </MainLayout>

    </div>
  )
}

export default Landing
