import React from 'react'
import './Features.css'
import togethr from '../../assets/togethr.png'
import creatives from '../../assets/creatives.png'
import manageb from '../../assets/manageb.png'
function Features() {
  return (
    <div className='home_b'>
       <div className='flex_cont'>
      <div className="curved-boxa">
        <h2>Together</h2><br></br>
      <div><img  className='imga' src={togethr}/></div>
      <h4>Connecting with people through music transcends the boundaries of language, allowing us to communicate and connect with individuals who may come from different backgrounds and cultures</h4>
      </div>
      <div className="curved-boxb">
        <h2>Manage</h2><br></br>
        <div><img  className='imga' src={manageb}/></div>
        <h4>Managing music involves organizing, curating, and controlling the music library or collection to enhance the listening experience</h4>
        </div>
      <div className="curved-boxc">
        <h2>Create</h2><br></br>
        <div><img  className='imgc' src={creatives}/></div>
       <h4>Creating a playlist is the process of carefully selecting and arranging a collection of songs to suit a specific mood, occasion, or personal preference</h4> 
       </div>
      
      </div>
    </div>
  )
}

export default Features
