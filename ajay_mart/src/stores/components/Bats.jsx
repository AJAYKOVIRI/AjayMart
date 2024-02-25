import React from 'react'
import { batsData } from '../data/bats' 
import { Link } from 'react-router-dom'

const Bats = () => {
      const firstFiveImages = batsData.slice(0,5)

    return (
      <>
      <h1 className='proTitle'>
        BATS
        </h1>
         <div className="proSection">
          {
              firstFiveImages.map((item)=>{
                  return(
                  <div className='imgBox'>
                    <Link to='/bats'>
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

export default Bats