import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        username,
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <div className="form-group">
          <label>
            <h5>Username</h5>
            <input
              type="username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
        </div>
        <br />

        <div className="form-group">
          <label>
            <h5>Email</h5>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <br />

        <div className="form-group">
          <label>
            <h5>Password</h5>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <br />

        <div className="form-group">
          <label>
            <h5>Verify your password</h5>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
          </label>
        </div>
        <br />

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
