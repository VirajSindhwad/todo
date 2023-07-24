import React, { useState, useEffect } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [Items, setItems] = useState(() => {
    const saved = localStorage.getItem("listItem");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(Items));
  }, [Items]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Items.map((todoItem, index) => (
            <Todo
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
