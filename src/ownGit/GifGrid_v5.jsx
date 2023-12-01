/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
// import { useEffect, useState } from 'react';
import { GifItem } from './GifItem'
// import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  // const [img, setImg] = useState([])

  // const getImg = async () => {
  //   const imgGifs = await getGifs(category)
  //   setImg(imgGifs)   
  // }
  // useEffect( () => {
  //     getImg()
  // }, [ ])

  const { img, isLoading } = useFetchGifs(category)
  console.log(img, isLoading);

  return (
    <>
      <h4> {category} </h4>
      <p> Here goes the pictures </p>
      <div className='card-grid' >
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