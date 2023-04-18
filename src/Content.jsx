import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  //let posts = [];
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(function (response) {
      console.log(response);
      //posts = response.data;
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
      <PostsIndex posts={posts} />
    </div>
  );
}
