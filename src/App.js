import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Game from "./components/tic_tac_toe";
import { USERS } from "./mockdata";

function App() {
  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");

  const Login = (creditinals) => {
    setError("");

    const currentUser = USERS.find((user) => user.name === creditinals.name);

    if (!currentUser) {
      setError("no user found");
      return;
    }

    if (currentUser.password === creditinals.password) {
      setUser({
        name: creditinals.name,
      });
      return;
    }

    setError("check your creditialns");
  };

  const Logout = () => {
    setUser({ name: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h2 className="welcome">
            welcome, <span>{user.name} </span> to x/o
          </h2>
          <Game />
          <button className="logout" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
