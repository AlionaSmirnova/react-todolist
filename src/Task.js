import React from "react";
import Modal from "./Modal";

const Task = ({
  task,
  onChangeCheck,
  removeTask,
  index,
  openModal,
  // callModal,

  ...props
}) => {
  const ActionBtn = () => (
    <div className="actionBtn">
      <p> {task.priority}</p>

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => openModal()}
      ></input>

      <button type="button" className={hiddenEdit}>
      {/* onClick={editTask()} */}
      <img src="https://img.icons8.com/nolan/20/edit--v1.png" alt="pen"/>
            </button>
      <button
        value="delete"
        className={btnDelete}
        onClick={() => removeTask(index)}
      >
        ❌
      </button>
    </div>
  );
  const hiddenEdit = task.done ? "btnHide" : "btnShow";
  const className = "task " + (task.done ? "task-done" : "");
  const btnDelete = task.done ? "btnShow" : "btnHide";
  return (
    <div className="task" className={className}>
      <p>{task.title} </p>
      <ActionBtn> </ActionBtn>
      {/* <Modal  title={"Mark task as done?"} isOpen={this.state.isOpen} />  */}
    </div>
  );
};

export default Task;
