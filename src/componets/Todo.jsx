import { useState } from "react";
import { Filter } from "./Filter";
import { Input } from "./Input";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const getKey = () => Math.random().toString(32).substring(2);
  const [filter, setFilter] = useState("ALL");
  const [items, setItems] = useState([
    { key: getKey(), text: "I will be programmer", done: false },
    { key: getKey(), text: "I will be happy man", done: false },
    { key: getKey(), text: "I will be smart man", done: false }
  ]);

  const handleChange = (val) => {
    const newItems = items.map((item) => {
      if (item.key === val.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
  const onAdd = (val) => {
    setItems([...items, { key: getKey(), text: val, done: false }]);
  };

  const onChange = (val) => {
    setFilter(val);
  };

  const displyaItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });

  const onDelete = (val) => {
    const newItems = items.filter((item) => {
      if (item.key !== val.key) {
        return item;
      }
    });
    setItems(newItems);
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <span />
        ⚛️ React ToDo
      </div>
      <Filter onChange={onChange} filter={filter} />
      <Input onAdd={onAdd} />
      {displyaItems.map((item) => (
        <TodoItem
          item={item}
          key={item.key}
          handleChange={handleChange}
          onDelete={onDelete}
        />
      ))}
      <div className="panel-block">{displyaItems.length}items</div>
    </div>
  );
};
