import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setStatus(error.response.status);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://http.cat/${status}`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          Name:{" "}
          <input
            class="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
          />
        </div>
        <small>{20 - name.length} characters remaining</small>
        <div class="form-group">
          Email: <input name="email" type="email" />
        </div>
        <div class="form-group">
          Password: <input name="password" type="password" />
        </div>
        <div class="form-group">
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
