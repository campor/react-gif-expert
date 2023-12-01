/* eslint-disable no-unused-vars */
//* New Project
//* API Key = wFU1ZylIsiqsBipwCEY8chNeP2U0VWuC
//* Using file index.js in folder 'components' to bring more easy the components files and reduce imports.

import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onNewCategory = (value) => {
    console.log('You pushed the button');
    if (!value) {
      return console.log('Nothing to upload');
    }

    const validateValue = categories.includes(value)

    if (validateValue) {
      return console.log('Category already exist!');
    }

    setCategories([...categories, value])
  }

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory funcNewCategory={onNewCategory} />

      <ol>
        { categories.map(ele => <GifGrid key={ele} category={ele} /> ) }
      </ol>
    </>
  )
}