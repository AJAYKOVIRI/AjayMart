import React from 'react'
import { glovesData } from '../data/gloves'
import { Link } from 'react-router-dom'

const Gloves = () => {

      const firstFiveImages = glovesData.slice(0,5)

      return (
        <>
        <h1 className='proTitle'>GLOVES</h1>
           <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                    <div className='imgBox'>
                        <Link to={'/gloves'}>
                        <img className='proImage' src={item.image} alt="balls-pic" />
                        </Link>
                    </div>
                    )
                })
            }
        </div>
        </>
       
      )
  }

export default Gloves