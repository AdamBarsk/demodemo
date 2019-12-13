import React, { useState } from "react";
import * as style from "./Main.module.scss";
import { ReactComponent as SortUp } from "../../assets/images/sort-alpha-up-solid.svg";
import { ReactComponent as SortDown } from "../../assets/images/sort-alpha-down-solid.svg";
import List from "../../components/List/List";
import Filter from "../../components/Filter/Filter";

const Main = ({ people }) => {
  const [ascending, setAscending] = useState(true);
  const [filter, setFilter] = useState([]);

  const parties = [
    ...new Set(people.map(person => person.parti))
  ].sort((a, b) => a.localeCompare(b, "sv"));

  const filteredParties = parties.filter(party => !filter.includes(party));
  const sorting = ascending ? filteredParties : filteredParties.reverse();

  const handleFilter = party => {
    let array = [...filter];
    if (filter.includes(party)) {
      array = array.filter(item => item !== party);
    } else {
      array.push(party);
    }
    setFilter(array);
  };

  return (
    <div className={style.container}>
      <div className={style.options}>
        <div className={style.sort}>
          <div onClick={() => setAscending(!ascending)}>
            {ascending ? <SortDown /> : <SortUp />}
          </div>
        </div>
        <div className={style.filtering}>
          {parties.map(party => (
            <Filter
              key={party}
              party={party}
              filter={filter}
              handleFilter={handleFilter}
            />
          ))}
        </div>
      </div>
      <List sorting={sorting} people={people} />
    </div>
  );
};

export default Main;
