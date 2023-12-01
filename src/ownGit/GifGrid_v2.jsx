/* eslint-disable react/prop-types */
// import { useState } from "react"
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  // const [newCategory, setNewCategory] = useState('')

  const getGifts = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wFU1ZylIsiqsBipwCEY8chNeP2U0VWuC&q=${category}&limit=20`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }) )

    console.log(gifs);
  }

  getGifts();

  return (
    <>
      <h4> {category} </h4>
      <p> Here goes the pictures </p>
    </>
  )
}

GifGrid.proTypes = {
  funcNewCategory: PropTypes.func
}