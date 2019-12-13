import React from "react";
import * as style from "./Filter.module.scss";
import { ReactComponent as Slash } from "../../assets/images/slash-solid.svg";

const Filter = ({ party, handleFilter, filter }) => {
  const isFiltered = filter.includes(party);

  return (
    <div className={style.container} onClick={() => handleFilter(party)}>
      {party}
      {isFiltered && <Slash />}
    </div>
  );
};

export default Filter;
