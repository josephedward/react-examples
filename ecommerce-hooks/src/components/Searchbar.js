// component
import Filter from "components/Filter";
import React from "react";
// style
import styles from "./Searchbar.module.css";
import useHideOnClickOutside from "hook/useHideOnClickOutside";

export default function Searchbar(props) {
  // console.log(props)
  /*
    filters: [
      [
        category: <string>,
        relation: <string>,
        option: <string>
      ],
      ...
    ],
    setFilters: fn(
      [
        [
          category: <string>,
          relation: <string>,
          option: <string>
        ],
        ...
      ]
    )
  */

  return (
    <div className={styles.Searchbar}>
      {props.filters.map((filter) => (
        <Filter
          filters={props.filters}
          filter={filter}
          key={filter}
          setFilters={props.setFilters}
          isOnEdit={false}
        />
      ))}

      <button
        onClick={() => {
          props.setFilters([...props.filters, [<Filter isOnEdit={true} />]]);
        }}
      >
        <i className="fas fa-plus">New Filter</i>
      </button>
    </div>
  );
}
