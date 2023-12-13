// import React, { useState,useEffect } from 'react'

// const FetchAPI = () => {

//     const [post,setPost] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(Response => Response.json())
//         .then(post => setPost(post))
//     },[])

//   return (
//     <div>
//         {post.map((posts) => <h1>{posts.title}</h1> )}
//     </div>
//   )
// }

// export default FetchAPI 

// import React, { useEffect, useState } from 'react'

// const FetchAPI = () => {

//     const [post,setPost] = useState();
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(post => setPost(post))
//     },[])

//   return (
//     <div>
//         {post.map((posts) => <h3>{posts.title}</h3> )} 
//     </div>
//   )
// }

// export default FetchAPI


import React, { useEffect, useState } from "react";

const FetchAPI = () => {

  const [posts,setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts))
  },[])

  return (
    <div>
      {posts.map((post) => <h4>{post.title}</h4>)}
    </div>
  )
}

export default FetchAPI