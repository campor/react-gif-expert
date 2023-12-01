/* eslint-disable react/prop-types */
import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ funcNewCategory }) => {

  const [newCategory, setNewCategory] = useState('')

  const handleAddCategory = (e) => {
    setNewCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newCategory.trim()) {
      return console.log('Nothing to upload');
    }

    funcNewCategory(newCategory.trim())
    setNewCategory('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter Category"
        value={newCategory}
        onChange={handleAddCategory}
      />
    </form>
  )
}

AddCategory.proTypes = {
  funcNewCategory: PropTypes.func
}