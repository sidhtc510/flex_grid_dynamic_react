import React from "react";
import Item from "../Item";

export default function ItemsContainer({ items, styleState }) {


  return (
    <div className="mainContainerFlex" style={styleState}>
      {items.map((el) => (
        <Item key={el.ids} {...el} />
      ))}
    </div>
  );
}
