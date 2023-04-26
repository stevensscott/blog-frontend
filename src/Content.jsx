import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsUpdate } from "./PostsUpdate";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PostMoreInfo } from "./PostMoreInfo";

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

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}`).then((response) => {
      console.log(response.data);
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    console.log("in handleUpdatePost");
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(response);
      setCurrentPost(response.data);
      //The setPost code below replaces the old post with the newly edited post
      //the posts is a varible define in the setPost method that holds an array represented
      //the current post that I am working with
      setPosts(
        posts.map((posts) => {
          console.log("I am in setPost from line 50");
          console.log(posts);
          if (posts.id === response.data.id) {
            return response.data;
          } else {
            return posts;
          }
        })
      );
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);
  return (
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/create" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts/:id" element={<PostMoreInfo />} />
      </Routes>

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDeletePosts={handleDestroyPost} />
      </Modal>
    </div>
  );
}
