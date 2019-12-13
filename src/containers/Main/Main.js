import React, { useState } from "react";
import { container, options, sort, filtering } from "./Main.module.scss";
import List from "../../components/List/List";
import Filter from "../../components/Filter/Filter";

const Main = ({ people }) => {
  const [ascending, setAscending] = useState(true);
  const [filter, setFilter] = useState([]);

  const parties = [...new Set(people.map(person => person.parti))];
  const sorted = [...parties].sort((a, b) => a.localeCompare(b));
  const sorting = ascending ? sorted : sorted.reverse();

  return (
    <div className={container}>
      <div className={options}>
        <div className={sort} onClick={() => setAscending(!ascending)}>
          Sorting by: {ascending ? "Ascending" : "Descending"}, click to change!
        </div>
        <div className={filtering}>
          {parties.map(party => (
            <Filter key={party} party={party} />
          ))}
        </div>
      </div>
      <List sorting={sorting} people={people} />
    </div>
  );
};

export default Main;
