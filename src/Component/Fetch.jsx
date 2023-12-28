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
       <table>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Division</th>
          <th>Block</th>
          <th>Pincode</th>
        </tr>
        <tbody>
          {posts.map((post,intex) => (
            <tr key={intex}>
              <td>{post.Name}</td>
              <td>{post.District}</td>
              <td>{post.Division}</td>
              <td>{post.Block}</td>
              <td>{post.Pincode}</td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>

  )
}

export default Fetch