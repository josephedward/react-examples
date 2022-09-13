import { React, Fragment, useState } from "react";

export default function Relation(props) {
  const relations = ["is", "is not"];

  return (
    <select
      name="relations"
      id="relations"
      placeholder="Select Relation"
      onChange={(e) => props.setRelation(e.target.value)}
    >
      <option value="none" selected disabled>
        Select Relation
      </option>
      {relations.map((relation) => {
        return (
          <option key={relation} value={relation}>
            {relation}
          </option>
        );
      })}
    </select>
  );
}
