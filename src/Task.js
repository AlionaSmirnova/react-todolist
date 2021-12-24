import React from "react";
import Modal from "./Modal";

const Task = ({
  task,
  onChangeCheck,
  removeTask,
  index,
  openModal,

  ...props
}) => {
  const ActionBtn = () => (
    <div className="actionBtn">
      <p> {task.priority}</p>

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onChangeCheck(task.id, task.done)}
        onClick={() => openModal()}
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
      {/* <Modal  title={"Mark task as done?"} isOpen={this.state.modal1} />  */}
    </div>
  );
};

export default Task;
