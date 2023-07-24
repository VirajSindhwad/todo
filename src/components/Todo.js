import React from "react";

function Todo({ text, onChecked, id }) {
  return (
    <div
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default Todo;
