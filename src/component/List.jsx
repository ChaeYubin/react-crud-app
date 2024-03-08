import React from "react";
import ListItem from "./ListItem";

function List({ list }) {
  return (
    <>
      {list.map((item) => (
        <ListItem key={item.id} title={item.title} expenditure={item.amount} />
      ))}
    </>
  );
}

export default List;
