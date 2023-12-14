import React, { useState,useEffect } from 'react'

const FetchAPI = () => {

    const [post,setPost] = useState([])
    useEffect(() => {
        fetch('https://api.postalpincode.in/pincode/673307')
        .then(Response => Response.json())
        .then(post => setPost(post))
    },[])

  return (
    <div>
        {post.map((posts) => <h1>{posts.title}</h1> )}
    </div>
  )
}

export default FetchAPI 

 


