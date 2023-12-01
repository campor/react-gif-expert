/* eslint-disable no-unused-vars */
//* New Project
//* API Key = wFU1ZylIsiqsBipwCEY8chNeP2U0VWuC

import { useState } from "react"
import { AddCategory } from '../src/components/AddCategory'

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  // const [newCategory, setNewCategory] = useState('')

  // const handleAddCategory = (e) => {
  //   setNewCategory(e.target.value)
  // }

  const onNewCategory = (value) => {
    console.log(value);
    console.log('You pushed the button');
    if (!value) {
      return console.log('Nothing to upload');
    }

    // const validateValue = categories.find(e => e == value)
    const validateValue = categories.includes(value)
    console.log(validateValue);

    if (validateValue) {
      return console.log('Category already exist!');
    }

    setCategories([...categories, value])
  }

  // const onNewCategory = (value) => {
  //   console.log(value);
  //   console.log('You pushed the button');
  //   if (!value || !newCategory) {
  //     return console.log('Nothing to upload');
  //   }

  //   setCategories([...categories, value])
  //   console.log(categories);
  // }

  return (
    <>
      <h1>GitExpertApp</h1>

      <ol>
        { categories.map(ele => <li key={ele} > {ele} </li>) }
      </ol>
      {/* <input onChange={(e)=>handleAddCategory(e)}  type="text" /> */}
      <AddCategory funcNewCategory={onNewCategory} />
      {/* <input onChange={handleAddCategory}  type="text" />        
      <button onClick={onNewCategory} > Add Category </button> */}
      {/* <button onClick={(e) => handleButton(e)} value={'click'}> Add Category </button> */}
    </>
  )
}