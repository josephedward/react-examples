import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container"
    style={listStyle}
    >
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li style={li_1} className="list-group-item">{children}</li>;
}

const li_1={
  width:"100%",
  backgroundColor:"lightyellow",
  color:"black"

}

const listStyle={
  width:"75%",
  margin:"0 auto",
 
  border: "2px solid black",
}