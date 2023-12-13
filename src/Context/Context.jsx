// import React, { useContext } from 'react'
// import MyContext from './MyContext'

// const Context = () => {

//     const pssdvalue = useContext(MyContext);


//   return (
//     <div>{pssdvalue}</div>
//   )
// }

// export default Context





import React, { useContext } from 'react'
import MyContext from 'react'

const Context = () => {

  const passedvalue = useContext(MyContext)


  return (
    <div>{passedvalue}</div>
  )
}

export default Context





