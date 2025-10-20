import React from 'react'
import './cardstyle.css'

const CardsDY = (props) => {
    let arr = props.skills
  return (
    <div>
        <div className='Card'>
            <div className={props.live ? 'Online':'Offline'}>{props.live ? 'Online' : 'Offline'}</div>
            <img src={props.pic} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.city}</h3>
            <p>{props.role}</p>
            <button className='btn-1'>Message</button>
            <button className='btn-2'> Followers</button>
            <h4 className='skill'><strong>SKILL</strong></h4>
            <div className='skills'>
                {arr.map((s,index)=>(<p>{s}</p>))}
            </div>

      
        </div>
      
    </div>
  )
}

export default CardsDY
