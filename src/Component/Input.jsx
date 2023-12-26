import React, { useState } from 'react'

const Input = () => {

  const [store,setStore] = useState('');

  const handlestore = (e) => {
    // e.preventDefault()
    setStore(e.target.value);
    console.log(store);
  }


  return (
    <div>
      <input onChange={handlestore} />
    </div>
  )
}

export default Input