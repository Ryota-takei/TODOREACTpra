import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const getKey = () => Math.random().toString(32).substring(2);
  const [items, setItems] = useState([
    { key: getKey(), text: "I will be programmer", done: false },
    { key: getKey(), text: "I will be happy man", done: false },
    { key: getKey(), text: "I will be smart man", done: false }
  ]);

  return (
    <div className="panel">
      <div className="panel-heading">
        <span />
        ⚛️ React ToDo
      </div>
      {items.map((item) => {
        return (
          <label className="panel-block">
            <input type="checkbox" />
            {item.text}
          </label>
        );
      })}
      <div className="panel-block">{items.length}items</div>
    </div>
  );
};
