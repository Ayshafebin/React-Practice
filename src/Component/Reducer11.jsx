import React, { useReducer } from 'react'

const Reducer = (state,action) => {
    switch (action) {
        case 'Increment' : 
            return state + 1;
        case 'Decrement' :
            return state - 1;
        case 'Reset' :
            return 0;    
    }
}

const Reducer11 = () => {

    const [value,dispatch] = useReducer(Reducer, 0) 

  return (
    <div>
        <button onClick={()=>dispatch('Increment')}>Increment</button><br />
        {value}
        <button onClick={()=>dispatch('Decrement')}>Decrement</button><br />
        <button onClick={()=>dispatch('Reset')}>Reset</button><br />
    </div>
  )
}

export default Reducer11