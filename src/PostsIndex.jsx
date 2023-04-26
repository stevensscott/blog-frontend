import { Link } from "react-router-dom";
import { useState } from "react";
// this is taking in array that is defined in the Content method
//in this function we are iterating via map the props arrray
//we also are creating the html on fly...once for each iteration
//Line 16 navs to a new page for the post I am on. the route needs to match the one
//defined in the content.jsx file-<Route path="/posts/:id" element={<PostMoreInfo />} />
export function PostsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="posts-index">
      <h1>All Blog Post</h1>
      Search:{" "}
      <input list="titles" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <img src={post.image} />
            <p>{post.body}</p>
            <button onClick={() => props.onShowPost(post)}>More info</button>
            <Link to={`/posts/${post.id}`}>Show Details in Web Page</Link>
            <p>------------------------------------</p>
          </div>
        ))}
    </div>
  );
}
