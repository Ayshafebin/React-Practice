import React, { useEffect, useState } from 'react'

const Counter11 = () => {

    const [count,setCount] = useState(0);

    const Increment = () => {
        setCount(count + 12);
    }

    const Decrement = () => {
        if(count > 0) {
            setCount(count-12)
        }
    }

    // const Increment = () => {
    //     setCount((prev) => prev + 12);
    // }

    // const Decrement = () => {
    //     setCount((prev) => prev - 12)
    // }

    

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

export default Counter11