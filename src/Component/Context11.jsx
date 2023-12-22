import React, { createContext, useContext } from 'react'

export const MyContext = createContext();

const Context11 = () => {

    const pssedvlu = useContext(MyContext);

  return (
    <div>{pssedvlu}</div>
  )
}

export default Context11