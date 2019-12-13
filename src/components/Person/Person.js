import React from "react";
import * as style from "./Person.module.scss";

const Person = ({ person: { efternamn, tilltalsnamn, bild_url_80 } }) => {
  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={bild_url_80}
        loading="lazy"
        alt="Bild av riksdagsledamot."
      />
      <div>{tilltalsnamn}</div>
      <div>{efternamn}</div>
    </div>
  );
};

export default Person;
