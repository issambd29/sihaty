import React from 'react'
import "./CatCaart.css"
function CatCaart(url,title) {
  return (
    <div className=''>
      <img src={url}  />
      <h3>{title}</h3>
    </div>
  )
}

export default CatCaart
