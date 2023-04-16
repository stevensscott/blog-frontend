function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <button type="submit">Image</button>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button>More Info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Post 1",
      body: "Post 1 Text Here bla bla bla",
      image:
        "https://images.unsplash.com/photo-1616951116286-109a1039275d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Post 2 Text Here bla bla bla",
      image:
        "https://images.unsplash.com/photo-1598970829637-89b81d47ae27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Post 3 Text Here bla bla bla",
      image:
        "https://images.unsplash.com/photo-1616951116286-109a1039275d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
