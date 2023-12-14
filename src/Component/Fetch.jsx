import React, { useState,useEffect } from "react";

const Fetch = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.postalpincode.in/pincode/673307')
    .then(response => response.json())
    .then(Data => setPosts(Data[0].PostOffice))
  },[])

  return (

    <div>
      {posts.map((post) =>
      <>
      <h1>{post.Name}</h1>
      <h3>{post.Pincode}</h3>
      <h3>{post.Block}</h3>
      <h3>{post.Country}</h3>

      <h3>{post.State}</h3>

      </>
       )}
    </div>

  )
}

export default Fetch