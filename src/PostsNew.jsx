import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("My handle submit is working");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
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
