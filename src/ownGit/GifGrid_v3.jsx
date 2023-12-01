/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//* The function GetGifs was created in a separated file and used useEffect to handle the http request

import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {

  // const [newCategory, setNewCategory] = useState('')

  // const getGifts = async () => {
  //   const url = `https://api.giphy.com/v1/gifs/search?api_key=wFU1ZylIsiqsBipwCEY8chNeP2U0VWuC&q=${category}&limit=20`
  //   const res = await fetch(url)
  //   const { data } = await res.json()

  //   const gifs = data.map( img => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url
  //   }) )

  //   console.log(gifs);
  // }

  const [img, setImg] = useState([])

  useEffect( () => {
    getGifs(category)
      .then(e => {
        setImg(e)
        console.log(img);
      })
  }, [ ])

  return (
    <>
      <h4> {category} </h4>
      <p> Here goes the pictures </p>
      <ol>
        {img.map(ele => <li key={ele.id}> { ele.title }  </li>  )} 
      </ol>
    </>
  )
}

GifGrid.proTypes = {
  funcNewCategory: PropTypes.func
}