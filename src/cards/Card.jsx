import React from 'react'
import './cardstyle.css'

const Card = () => {
  return (
    <div className='Card'>
        <div className='Online'>Online</div>
        <img src="profile.jpg" alt="" />
        <h2>Aasish Kumar</h2>
        <h3>Trichy</h3>
        <p>Developer</p>
        <button className='btn-1'>Message</button>
        <button className='btn-2'> Followers</button>
        <h4 className='skill'><strong>SKILL</strong></h4>
        <div className='skills'>
            <p>ui ux</p>
            <p>java</p>
            <p>Front-end Development</p>
            <p>Back-end Development</p>
            <p>Full-Stack Development</p>
            <p>React</p>
            <p>Node</p>
        </div>

      
    </div>
  )
}

export default Card
