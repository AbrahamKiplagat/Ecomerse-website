import React,{useState} from "react";
import "./style.css";
import Home from "../Home";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(username, password);

    try {
      const loggedInResponse = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const loggedIn = await loggedInResponse.json();
      console.log(loggedIn.token);

      if (loggedIn) {
        localStorage.setItem("token", loggedIn.token);
        navigate("/home");
      } else {
        alert("wrong username or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="logincss">
      <form id="loginform" onSubmit={loginSubmit}>
        <h3>LOGIN</h3>

        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            name="UserName"
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
