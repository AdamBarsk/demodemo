import React from "react";
import { container } from "./Person.module.scss";

const Person = ({ person: { efternamn, tilltalsnamn, bild_url_80 } }) => {
  return (
    <div className={container}>
      <img src={bild_url_80} loading="lazy" alt="Bild av riksdagsledamot." />
      <div>{tilltalsnamn}</div>
      <div>{efternamn}</div>
    </div>
  );
};

export default Person;
