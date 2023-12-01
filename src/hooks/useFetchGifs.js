/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {
 const [img, setImg] = useState([]);
 const [isLoading, setIsLoading] = useState(true)

  const getImg = async () => {
    const imgGifs = await getGifs(category)
    setImg(imgGifs)   
    setIsLoading(false)
  }

  useEffect( () => {
      getImg()
  }, [])
  
  return {
    img,
    isLoading
  }
}