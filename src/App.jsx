function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <label>
            Title: <input type="text" />
          </label>
          <label>
            Body: <input type="text" />
          </label>
          <button type="submit">Image</button>
        </form>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
      </div>
      <div className="posts">
        <h2>Post 1</h2>
        <p>Body: Test Text1 goes here</p>
        <img
          src="https://images.unsplash.com/photo-1616951116286-109a1039275d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="beach pic"
        />

        <h2>Post 2</h2>
        <p>Body: Test Text2 goes here</p>
        <img
          src="https://images.unsplash.com/photo-1598970829637-89b81d47ae27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anBnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="mountain pic"
        />
      </div>
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;
