import React, { useState } from "react";

function Register({ setPage }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = () => {

    if(password.length < 4){

      setMessage("Password must be minimum 4 characters");
      return;
    }

    if(password !== confirmPassword){

      setMessage("Passwords do not match");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");

    setPage("login");
  };

  return (

    <div className="container">

      <h2>User Registration</h2>

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

      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button onClick={register}>
        Register
      </button>

      <p>{message}</p>

      <button onClick={() => setPage("login")}>
        Back to Login
      </button>

    </div>
  );
}

export default Register;