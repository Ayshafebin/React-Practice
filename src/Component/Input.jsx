import React, { useState } from 'react'

const Input = () => {
    const [value,setValue] = useState('')

    const display = (e) => {
        setValue(e.target.value)
        console.log(value);
    }
  return (
    <div>
        <input onChange={display}

        />
    </div>
  )
}

export default Input