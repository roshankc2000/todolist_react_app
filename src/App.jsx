import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [newInputTask, setTask] = useState("");
  const [list, setList] = useState([]);

  const itemChange = (received_data) => {
    setTask(received_data.target.value);
  };

  const addListOfItems = () => {
    // logic to prevent empty spaces or whitespaces
    let cleanData = newInputTask.trim();
    if (cleanData == "") {
      alert("empty input: Try again");
    } else {
      setList((oldItems) => {
        return [...oldItems, newInputTask];
      });
      // Reseting newInputTask to empty after adding task
      setTask("");
    }
  };
  const resetListOfItems = () => {
    // resets the array to to empty i.e. all list deleted as once
    setList(() => {
      return [];
    });
  };

  const deleteItem = (id) => {
    setList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        // here it checks id if id is match it will be filtered (removed)
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="App_title">💡 My Todo List App ✅ </h1>
          <br />
          <input
            type="text"
            placeholder="Add new item"
            onChange={itemChange}
            value={newInputTask}
          />
          <button onClick={addListOfItems}> + </button>
          <br />
          <button className="reset" onClick={resetListOfItems}>
            RESET
          </button>
          <ol>
            {list.map((itemValue, index) => {
              // return <li>{itemValue}</li>;
              return (
                <TodoList
                  task={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
