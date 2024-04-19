import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        {/* <i className="fa fa-times" onClick={props.onSelect}> */}
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </i>
        <li>{props.task}</li>
      </div>
    </>
  );
};

export default TodoList;
