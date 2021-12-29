import React from "react";
import "./App.css";
import Task from "./Task";
import TaskInput from "./TaskInput";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, title: "Create todo-app", done: false, priority: "Low" },
        { id: 1, title: "Write some code", done: false, priority: "Medium" },
        { id: 2, title: "Make a plan", done: false, priority: "High" },
      ],
      isOpen: false,
      currentTask: { id: 0, title: "", done: false, priority: "" },
    };
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editTask = this.editTask.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal(task) {
    console.log('fhfhfh');
    this.setState({
      isOpen: true,
      currentTask: task,
    });
  }
  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  removeTask(index) {
    console.log(index);
    const DelTask = this.state.tasks;
    DelTask.splice(index, 1);
    this.setState({
      tasks: DelTask,
    });
  }
  addTask(task, priority) {
    let newTasks = this.state.tasks;
    newTasks.push({
      id: newTasks.length,
      title: task,
      done: false,
      priority: priority,
    });
    this.setState({
      tasks: newTasks,
    });
  }

  editTask(id, newTitle) {
    const editedTask = this.state.tasks.map((task) => {
      if (id === task.id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    this.setState({
      tasks: editedTask,
    });
  }

  onChangeCheck() {
    const { currentTask } = this.state;
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === currentTask.id) {
        return { ...task, done: !currentTask.done };
      }
      return task;
    });
    this.setState({
      tasks: newTasks,
      isOpen: false,
    });
  }
  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length} </h1>

        {[...activeTasks, ...doneTasks].map((task, index) => {
          return (
            <Task
              onChangeCheck={this.onChangeCheck}
              removeTask={this.removeTask}
              editTask={this.editTask}
              task={task}
              key={task.id}
              priority={task.priority}
              index={index}
              openModal={this.openModal}
            />
          );
        })}
        <TaskInput addTask={this.addTask}> </TaskInput>
        <Modal
          title={"Mark task as done?"}
          isOpen={this.state.isOpen}
          onModalClose={this.closeModal}
          submitBtn={this.onChangeCheck}
        
        />
      </div>
    );
  }
}
export default App;
