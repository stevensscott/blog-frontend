export function PostsShow(props) {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <p>Test to make sure this is working</p>
      <p>Author:{props.post.user_id}</p>
      <p>{props.post.body}</p>
      <img src={props.post.image}></img>
    </div>
  );
}
