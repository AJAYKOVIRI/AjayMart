import React from 'react'
import { ballsData } from '../data/balls'
import { Link } from 'react-router-dom'

const Balls = () => {

      const firstFiveImages = ballsData.slice(0,6)

      return (
        <>
        <h1 className='proTitle'>BALLS</h1>
           <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                    <div className='imgBox' id='balls' >
                        <Link to='/balls'>
                        <img className='proImage ballsImage' src={item.image} alt="balls-pic" />
                        </Link>
                    </div>
                    )
                })
            }
        </div>
        </>
       
      )
  }

export default Balls