/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
// import { GifItem } from '../components/GifItem'
import { GifItem } from './GifItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  const [img, setImg] = useState([])

  const getImg = async () => {
    const imgGifs = await getGifs(category)
    setImg(imgGifs)   
  }
  useEffect( () => {
    // getGifs(category)
    //   .then(e => {
    //     setImg(e)
    //     console.log(img);
    //   })
      getImg()
  }, [ ])

  return (
    <>
      <h4> {category} </h4>
      <p> Here goes the pictures </p>
      <div className='card-grid' >
        {/* {img.map(ele => <li key={ele.id}> { ele.title }  </li>  )}  */}
        {/* {img.map(({id, title}) => <GifItem key={id} title={title} />  )}  */}
        {img.map((image) => <GifItem 
                                    key={image.id} 
                                    { ...image } 
                                  />  )} 
      </div>
    </>
  )
}

GifGrid.proTypes = {
  funcNewCategory: PropTypes.func
}