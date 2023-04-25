import axios from "axios";

export function PostsUpdate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("My handle submit is working");

    const params = new FormData(event.target);
    console.log(params);
    console.log(event.target);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <h1>Update post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
