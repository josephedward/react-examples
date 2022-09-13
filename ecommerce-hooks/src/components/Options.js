import { React, Fragment, useState } from "react";
import { CheckboxWithText } from "./CheckboxWithText";

export default function Options(props) {
  //   console.log("Options props:", props);

  if (props.categoryType == "select") {
    return (
      <select
        name="options"
        id="options"
        placeholder="Select Option"
        onChange={(e) => props.setSelectedOptions(e.target.value)}
      >
        <option value="none" selected disabled>
          Select Option
        </option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    );
  }

  if (props.categoryType == "text") {
    return (
      <input
        type="text"
        name="options"
        id="options"
        placeholder="Select Option"
        onChange={(e) => props.setSelectedOptions(e.target.value)}
      />
    );
  }

  if (props.categoryType == "checkbox") {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {props.options.map((option) => {
          return (
            <CheckboxWithText
              text={option}
              key={option}
              value={option}
              option={option}
              onChange={(e) =>
                props.setSelectedOptions([...props.selectedOptions, option])
              }
            >
              {option}
            </CheckboxWithText>
          );
        })}
      </div>
    );
  }
}
