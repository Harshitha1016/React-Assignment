import React, { useState } from "react";

function Login({ setPage }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = () => {

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if(username === storedUser &&
       password === storedPass){

      localStorage.setItem("loginStatus", "true");

      setPage("home");
    }

    else{
      setMessage("Invalid Username or Password");
    }
  };

  return (

    <div className="container">

      <h2>User Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

      <p>{message}</p>

      <button onClick={() => setPage("register")}>
        Register
      </button>

    </div>
  );
}

export default Login;