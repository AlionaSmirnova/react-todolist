import React from "react";

const Task = ({ task, onChangeCheck, ...props }) => {
  const ActionBtn = () => (
    <div className="actionBtn">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChangeCheck(task.id, task.done)}
      ></input>
      <button value="delete" className={btnDelete} onClick={delTask}>
        ❌
      </button>
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");
  const btnDelete = task.done ? "btnShow" : "btnHide";
  return (
    <div className="task" className={className}>
      <p>{task.title} </p>
      <ActionBtn> </ActionBtn>
    </div>
  );
};

export default Task;
