import React, { useCallback } from "react";
import clsx from 'clsx'
import Modal from "./Modal";

const Task = ({
  task,
  // onChangeCheck,
  removeTask,
  index,
  openModal,
}) => {
  const handleRemove = useCallback(() => removeTask(index), [removeTask, index])
  const ActionBtn = () => (
    <div className="actionBtn">
      <p> {task.priority}</p>

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => openModal(task)}
      ></input>

      <button type="button" className={hiddenEdit}>
        {/* onClick={editTask()} */}
        <img src="https://img.icons8.com/nolan/20/edit--v1.png" alt="pen" />
      </button>
      <button
        value="delete"
        className={btnDelete}
        onClick={handleRemove}
      >
        ❌
      </button>
    </div>
  );
  const hiddenEdit = task.done ? "btnHide" : "btnShow";
  const btnDelete = task.done ? "btnShow" : "btnHide";
  return (
    <div className="task" className={clsx('task', task.done && "task-done")}>
      <p>{task.title} </p>
      <ActionBtn> </ActionBtn>
    </div>
  );
};

export default Task;
