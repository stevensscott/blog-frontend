//This file renders a variable web page to render the info on a specific post
//the route is defined in content.jsx - <Route path="/posts/:id" element={<PostMoreInfo />} />

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostMoreInfo() {
  const [post, setPost] = useState({});
  const params = useParams();
  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data); //call method on line 9, which returms a post variable which holds an array(each blog)
    });
  };
  useEffect(handleShowPost, []);
  return (
    <div>
      <div>
        <h2>Title: {post.title}</h2>
        <p>Test to make sure this is working post standalone page via variable</p>
        <p>Author:{post.user_id}</p>
        <p>{post.body}</p>
        <img src={post.image}></img>
      </div>
    </div>
  );
}
