/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { img, isLoading } = useFetchGifs(category)
  // console.log(img, isLoading);

  return (
    <>
      <h4> {category} </h4>
      {
        isLoading && ( <h2>Loading...</h2> )        
      }

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