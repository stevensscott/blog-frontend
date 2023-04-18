import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  //let posts = [];
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  //the syntax below is similar to let currentPost= setCurrentPost(post)
  //where current post is now a variable where you can access all the properties of the
  //passed in post
  const [currentPost, setCurrentPost] = useState({});

  //funcion below does a get request to get all the posts
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      //posts = response.data;
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <h2>Title: {currentPost.title}</h2>
        <p>Author:{currentPost.user_id}</p>
        <p>{currentPost.body}</p>
        <img src={currentPost.image}></img>
      </Modal>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
    </div>
  );
}
