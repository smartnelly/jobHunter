import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const { getUser } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    console.log("login???");
    try {
      const loginData = {
        email,
        password,
      };
      console.log("loginData", loginData);

      const loginRes = await axios.post(
        "http://localhost:5000/auth/login",
        loginData
      );
      console.log(loginRes);
      await getLoggedIn();
      console.log("loginRes", loginRes);
      await getUser(loginRes.data.user);
      history.push("/");
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>

      <form onSubmit={login}>
        <div className="form-group">
          <label>
            <h5>Email</h5>

            <input
              type="email"
              placeholder="ga@ga.com"
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
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
