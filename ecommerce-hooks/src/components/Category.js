import { React, Fragment, useState } from "react";

export default function Category(props) {
  // console.log("Category props:", props);
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        type="search"
        name="category"
        id="category"
        list="categories"
        placeholder="Start typing to search"
        onChange={(e) => {
          props.setCategory(e.target.value);
        }}

      />
      <datalist id="categories">
        {props.categories.map((category) => {
          return (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}
