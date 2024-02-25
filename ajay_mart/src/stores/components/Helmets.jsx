import React from 'react'
import { helmetsData } from '../data/helmets'
import { Link } from 'react-router-dom'

const Helmets = () => {

      const firstFiveImages = helmetsData.slice(0,4)

      return (
        <>
        <div className="proTitle">
        <h1>HELMETS</h1>
        </div>
           <div className="proSection">
            {
                firstFiveImages.map((item)=>{
                    return(
                    <div className='imgBox'>
                        <Link to={'/helmets'}>
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

export default Helmets