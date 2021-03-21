export const TodoItem = ({ onDelete, item, handleChange }) => {
  return (
    <>
      <label className="panel-block">
        <input type="checkbox" onChange={() => handleChange(item)} />
        <span className={item.done ? "has-text-grey-light" : ""}>
          {item.text}
        </span>
      </label>
      <button
        onClick={() => {
          onDelete(item);
        }}
      >
        削除
      </button>
    </>
  );
};
