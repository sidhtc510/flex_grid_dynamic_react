import { useState } from "react";
import "./App.css";

import ItemsContainer from "./components/ItemsContainer";
import Menu from "./components/Menu";
import PlusMinus from "./components/PlusMinus";

function App() {
  const itemsDefault = [
    { ids: 1 },
    { ids: 2 },
    { ids: 3 },
    { ids: 4 },
    { ids: 5 },
  ];

  const [items, setItems] = useState(itemsDefault);

  const minusItem = () => {
    items.pop();
    setItems([...items]);
  };
  const plusItem = () => {
    const lastIds = items[items.length - 1];
    items.push({ ids: lastIds.ids + 1 });
    setItems([...items]);
  };

  const style = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const [state, setState] = useState(style);

  const updateStyles = (obj) => {
    setState(obj);
  };

  return (
    <div>
      <PlusMinus minusItem={minusItem} plusItem={plusItem} />
      <p className="title">This is a main container with display:flex</p>
      <ItemsContainer items={items} styleState={state} />
      <Menu updateStyles={updateStyles} />
    </div>
  );
}

export default App;
