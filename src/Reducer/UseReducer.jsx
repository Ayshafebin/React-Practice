// import React, { useReducer } from 'react'


// const Reducer = (state,action) => {
//   switch (action){
//     case 'Increment' :
//       return state + 1;
//     case 'Decrement' : 
//       return state - 1;
//     case 'Reset' : 
//       return 0    
//   }
// }

// const UseReducer = () => {

//   const [value,dispatch] = useReducer(Reducer, 0)

//   return (
//     <div>
//       <button onClick={() => {dispatch('Increment')}}>Increment</button>
//       <h3>{value}</h3>
//       <button onClick={() => {dispatch('Decrement')}}>Decrement</button>
//       <button onClick={() => {dispatch('Reset')}}>Reset</button>
//     </div>
//   )
// }

// export default UseReducer

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

const UseReducer = () => {

  const [value,dispatch] = useReducer(Reducer,0);

  return (
    <div>
      <button onClick={() => dispatch('Increment')}>Increment</button> <br />
      {value} <br />
      <button onClick={() => dispatch('Decrement')}>Decrement</button> <br />
      <button onClick={() => dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default UseReducer