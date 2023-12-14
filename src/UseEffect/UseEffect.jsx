import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count,setCount] = useState(0);

    
        const Increment = () => {
            setCount(count+1);
        }
        const Decrement = () => {
            setCount(count-1)
        }
    
        useEffect(() => {
            console.log('side effect');
        },[])



  return (
    <div>
        <button onClick={Increment}>Increment</button>
        {count}
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default UseEffect