import { useState } from "react";

export const Input = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSave = (e) => {
    if (e.target.value === "") {
      return;
    }

    if (e.key === "Enter") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="panel-block">
      <input
        class="input"
        value={text}
        placeholder="Enter to add"
        onChange={handleChange}
        onKeyDown={handleSave}
      />
    </div>
  );
};
