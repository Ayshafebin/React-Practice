import React from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {

    const {id} = useParams();

  return (
    <div>
        <h3>UseParams{id}</h3>
        {/* <h3>Use {id}</h3> */}
    </div>
  )
}

export default UseParams