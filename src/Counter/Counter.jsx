// import React, { useState } from 'react'

// const Counter = () => {

//     const [count,setCount] = useState(0)

//     const Increment = () => {
//         setCount( (prev) => prev + 1) 
//     }

//     const Decrement = () => {
//         if( count > 0){
//             setCount((prev) => prev - 1)
//         }
//     }

//   return (
//     <div>
//         <button onClick={Increment}>Increment</button>
//         <h3>{count}</h3>
//         <button onClick={Decrement}>Decrement</button>
//     </div>
//   )
// }

// export default Counter



import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);

    const Increment = () => {
        setCount((prev) => prev+1)
    }

    const Decrement = () => {
        if(count > 0){
            setCount((prev) => prev-1)
        }
    }


  return (
    <div>
        <button onClick={Increment}>Increment</button>
        <h3>{count}</h3>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter