import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

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
    <div className="container">
      <Login />
      <Signup />
      <PostsNew />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
    </div>
  );
}
