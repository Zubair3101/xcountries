import React from 'react';
import "./Cardformat.css"

function Cardformat(props) {
  return (
    <div className="card">
        <img src={props.flag} alt={`${props.name}'s Flag`} />
        <h3>{props.name}</h3>
    </div>
  )
}

export default Cardformat;