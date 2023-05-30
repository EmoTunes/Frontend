import React from 'react'
import './Contact.css'
import contacth from '../../assets/contacth.png'
function Contact() {
  return (
    
      <div className='bghome'>

        <div className='con_head'><h1>Contact Us!</h1></div>
      <div className='con_container'>
        <div className='img_container'>
      <img className='imgg' src={contacth}/></div>
        <div className='vertical_line'><h3> <br></br> <br></br> Brad<br></br> brad1234@gmail.com<br></br> +191-XXX0000045</h3></div>
        
      </div>
      </div>
    
  )
}

export default Contact
