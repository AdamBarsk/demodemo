import React from "react";
import * as style from "./List.module.scss";
import Person from "../Person/Person";

const List = ({ people, sorting }) => {
  console.log(people);
  return (
    <div className={style.container}>
      {sorting.map(currentParty => {
        return (
          <div key={currentParty}>
            <div className={style.party}>{currentParty}</div>
            <div className={style.people}>
              {people
                .filter(person => person.parti === currentParty)
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
