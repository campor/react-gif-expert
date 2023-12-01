/* eslint-disable react/prop-types */
// import { useState } from "react"
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  // const [newCategory, setNewCategory] = useState('')



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