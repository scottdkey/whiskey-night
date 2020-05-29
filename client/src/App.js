import React, { useState, useEffect } from "react";
import "../src/components/scss/App.scss";
import axios from "axios";
import { useLocalState } from "./components/jsx/hooks";
import Session from "./components/jsx/Session";
import NewSession from "./components/jsx/newSession";

export const UserContext = React.createContext();
export const SessionContext = React.createContext();

function App() {
  const [session, setSession] = useState({});
  const [user, setUser] = useLocalState("user");

  useEffect(() => {
    axios
      .get("api/sessions")
      .then(res => {
        const session = [...res.data].pop();
        setSession(session);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      <SessionContext.Provider value={[session, setSession]}>
        <UserContext.Provider value={[user, setUser]}>
          {session === undefined ? <NewSession /> : null}
          <Session />
        </UserContext.Provider>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
