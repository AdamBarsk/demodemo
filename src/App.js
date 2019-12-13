import React, { useState, useEffect } from "react";
import { container, content } from "./App.module.scss";
import Axios from "axios";
import Main from "./containers/Main/Main";

const App = () => {
  const [error, setError] = useState(0);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    Axios.get("http://data.riksdagen.se/personlista/?utformat=json")
      .then(({ data: { personlista: { person } } }) => setPeople(person))
      .catch(() => error < 4 && setError(error + 1));
  }, [error]);

  return error === 4 ? (
    <div className={container}>Refresh and try again...</div>
  ) : (
    <div className={container}>
      <div className={content}>
        <Main people={people} />
      </div>
    </div>
  );
};

export default App;
