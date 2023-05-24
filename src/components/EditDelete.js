import React from 'react';


const EditDelete = ({ handleDelete, setEditing }) => {
  return (
    <>
    <button onClick={handleDelete} className='delete bg-gradient-to-r from-blue-500 to-purple-500'>Delete</button>
    <button className='edit bg-gradient-to-r from-blue-500 to-purple-500' onClick={() => setEditing(true)}>Edit Caption</button>
    </>
  )
}

export default EditDelete