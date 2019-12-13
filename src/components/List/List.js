import React from "react";
import * as style from "./List.module.scss";
import Person from "../Person/Person";

const List = ({ people, sorting }) => {
  return (
    <div className={style.container}>
      {sorting.map(currentParty => {
        return (
          <div className={style.party} key={currentParty}>
            <div className={style.header}>{currentParty}</div>
            <div className={style.people}>
              {people
                .filter(person => person.parti === currentParty)
                .sort((a, b) =>
                  a.sorteringsnamn.localeCompare(b.sorteringsnamn, "sv")
                )
                .map(person => (
                  <Person person={person} key={person.hangar_id} />
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
