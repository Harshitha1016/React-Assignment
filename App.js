import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

function App() {

  const [page, setPage] = useState("login");

  return (
    <div>

      {page === "login" &&
        <Login setPage={setPage} />
      }

      {page === "register" &&
        <Register setPage={setPage} />
      }

      {page === "home" &&
        <Home setPage={setPage} />
      }

    </div>
  );
}

export default App;