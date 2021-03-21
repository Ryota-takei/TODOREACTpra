export const Filter = ({ filter, onChange }) => {
  const handleClcik = (val) => {
    onChange(val);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={() => {
          handleClcik("ALL");
        }}
        className={filter === "ALL" ? "is-active" : ""}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={() => {
          handleClcik("TODO");
        }}
        className={filter === "TODO" ? "is-active" : ""}
      >
        Todo
      </a>
      <a
        href="#"
        onClick={() => {
          handleClcik("DONE");
        }}
        className={filter === "DONE" ? "is-active" : ""}
      >
        Done
      </a>
    </div>
  );
};
