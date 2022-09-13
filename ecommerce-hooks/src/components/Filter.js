import { React, Fragment, useState } from "react";

// const
import filterValues from "const/filterValues";

// custom hook
import useHideOnClickOutside from "hook/useHideOnClickOutside";

import { CheckboxWithText } from "./CheckboxWithText";

import { default as ReactSelect } from "react-select";
import Category from "./Category";

import Relation from "./Relation";
import Options from "./Options";

export default function Filter(props) {
  // console.log("Filter props:", props);
  /*
    props: {
      filters: [
        [
          category: <string>,
          relation: <string>,
          option: <string>
        ],
        ...
      ]
    }
  */
  const [isOnEdit, setIsOnEdit, ref] = useHideOnClickOutside(false);
  const [category, setCategory] = useState();
  const [relation, setRelation] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const deleteFilter = (filter) => {
    props.setFilters(props.filters.filter((f) => f !== filter));
  };

  const editFilter = (filter, category, relation, option) => {
    props.setFilters(
      props.filters.map((f) =>
        f === filter ? [category, relation, option] : f
      )
    );
  };

  return (
    <div>
      {isOnEdit ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {
            <Category
              setCategory={setCategory}
              categories={Object.keys(filterValues)}
            />
          }
          {/* {console.log("category:", category)} */}
          {category ? <Relation setRelation={setRelation} /> : null}
          {/* {console.log("relation : ", relation)} */}
          {relation ? (
            <Options
              categoryType={filterValues[category].categoryType}
              options={filterValues[category].options}
              setSelectedOptions={setSelectedOptions}
              selectedOptions={selectedOptions}
            />
          ) : null}
          {/* {console.log("selectedOptions:", selectedOptions)} */}
          <button
            onClick={() =>
              editFilter(props.filter, category, relation, selectedOptions)
            }
          >
            Edit Filter
          </button>
          <button onClick={() => setIsOnEdit(false)}>Cancel</button>
        </div>
      ) : (
        <Fragment>
          <button onClick={() => setIsOnEdit(true)}>
            {props.filter.join(" ")}
          </button>
          <button
            onClick={() => {
              deleteFilter(props.filter);
            }}
          >
            ✕
          </button>
        </Fragment>
      )}
    </div>
  );
}
