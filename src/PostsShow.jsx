export function PostsShow(props) {
  const handleSubmit = (event) => {
    console.log("am i here");
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  };

  const handleClick = () => {
    props.onDeletePosts(props.post);
  };
  return (
    <div>
      <div>
        <h2>Title: {props.post.title}</h2>
        <p>Test to make sure this is working modal</p>
        <p>Author:{props.post.user_id}</p>
        <p>{props.post.body}</p>
        <img src={props.post.image}></img>
      </div>

      <div>
        <h1>Update post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input defaultValue={props.post.title} name="title" type="text" />
          </div>
          <div>
            Body: <input defaultValue={props.post.body} name="body" type="text" />
          </div>
          <div>
            Image: <input name="image" type="text" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>

      <div>
        <button onClick={handleClick}>Delete Post</button>
      </div>
    </div>
  );
}
