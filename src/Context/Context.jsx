import React, { useContext } from 'react'
import MyContext from './MyContext'

const Context = () => {

    const pssdvalue = useContext(MyContext);


  return (
    <div>{pssdvalue}</div>
  )
}

export default Context