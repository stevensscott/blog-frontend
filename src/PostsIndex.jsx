// this is taking in array that is defined in the Content method
//in this function we are iterating via map the props arrray
//we also are creating the html on fly...once for each iteration
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
          <button>More Info!</button>
          <p>------------------------------------</p>
        </div>
      ))}
    </div>
  );
}
