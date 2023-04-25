import { LogoutLink } from "./Logout";
import { Login } from "./Login";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            My Blogs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/*   <a className="nav-link active" aria-current="page" href="/">
                Home
              </a> */}

              <Link className="nav-link" to="/create">
                New Post
              </Link>
              {/* <a className="nav-link" href="/">
                All Post
              </a> */}
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
