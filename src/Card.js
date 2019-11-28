import React from 'react'
import './Card.css'

var img = 'https://picsum.photos/200'

function Card (props) {
  return (
    <div className='Card'>
      <h3>{props.name}</h3>
      <img src={img} alt='random' />
      <div className='contact'>
        <p>{props.number}</p>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Card
