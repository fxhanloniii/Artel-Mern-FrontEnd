import React from 'react'

const EditDelete = ({ handleDelete }) => {
  return (
    <>
    <button onClick={handleDelete} className='delete submit bg-gradient-to-r from-blue-500 to-purple-500'>Delete</button>
    <button className='edit submit bg-gradient-to-r from-blue-500 to-purple-500'>Edit</button>
    </>
  )
}

export default EditDelete