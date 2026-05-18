import React from "react";

function Home({ setPage }) {

  const username = localStorage.getItem("username");

  const logout = () => {

    localStorage.removeItem("loginStatus");

    setPage("login");
  };

  return (

    <div className="container">

      <h1>Welcome, {username} 🎉</h1>
<p>You have successfully logged in.</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Home;