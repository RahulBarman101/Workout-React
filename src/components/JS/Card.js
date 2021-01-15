import React from 'react'
import '../Css/Card.css'

function Card({name,img}) {
    return (
      <div className="card">
        <img src={img} alt="" />
        <h1 className="title">{name}</h1>
        {/* <h1 className="duration">45sec</h1> */}
      </div>
    );
}

export default Card
