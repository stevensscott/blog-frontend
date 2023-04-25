import { Link } from "react-router-dom";
// this is taking in array that is defined in the Content method
//in this function we are iterating via map the props arrray
//we also are creating the html on fly...once for each iteration
//Line 16 navs to a new page for the post I am on. the route needs to match the one
//defined in the content.jsx file-<Route path="/posts/:id" element={<PostMoreInfo />} />
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Blog Post</h1>
      {props.posts.map((post) => (
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
