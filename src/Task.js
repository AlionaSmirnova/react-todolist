import React from "react";

const Task = ({ task, onChangeCheck, removeTask, index, ...props }) => {
  const ActionBtn = () => (
    <div className="actionBtn">
        <p> {task.priority}</p>

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChangeCheck(task.id, task.done)}
      ></input>
     
      <button
        value="delete"
        className={btnDelete}
        onClick={() => removeTask(index)}
      >
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
