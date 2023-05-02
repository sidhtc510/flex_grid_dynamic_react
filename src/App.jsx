import { useEffect, useState } from "react";
import "./App.css";

import ItemsContainer from "./components/ItemsContainer";
import Menu from "./components/Menu";
import PlusMinus from "./components/PlusMinus";

function App() {
  const itemsDefault = [
    { ids: 1 },
    { ids: 2 },
    { ids: 3 },
  ];

  // const [items, setItems] = useState(itemsDefault)
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("quantity")) ?? localStorage.setItem("quantity", JSON.stringify(itemsDefault)); // можно ли так записать в ЛокалСторэдж? без использования useEffect.  Я так предполагаю что вместо ...setItem('quantity').... нужно установить пустой массив [] , а ..setItem('quantity').... прописать ниже обернув его в useEffect
  });

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(items));
  }, [items]);

  const minusItem = () => {
    items.pop();
    setItems([...items]);
  };

  const plusItem = () => {
    const lastIds = items[items.length - 1] ?? { ids: 0 };
    // console.log(lastIds);
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
