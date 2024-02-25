import React from 'react'
import { padsData } from '../data/pads'
import { Link } from 'react-router-dom'

const Pads = () => {

      const firstFiveImages = padsData.slice(0,4)

    return (
      <>
      <h1 className='proTitle'>PADS</h1>
         <div className="proSection">
          {
              firstFiveImages.map((item)=>{
                  return(
                  <div className='imgBox'>
                    <Link to={'/pads'}>
                      <img className='proImage' src={item.image} alt="bat-pic" />
                      </Link>
                   </div>
                  )
              })
          }
      </div>
      </>
     
    )
  }

export default Pads