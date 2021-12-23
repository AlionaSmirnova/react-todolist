import React from "react";
import "./App.css";
import Task from "./Task";
import TaskInput from "./TaskInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, title: "Create todo-app", done: false, priority: "Low" },
        { id: 1, title: "Write some code", done: false, priority: "Medium" },
        { id: 2, title: "Make a plan", done: false, priority: "High" },
      ],
    };
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  removeTask(index) {
    console.log(index);
    const DelTask = this.state.tasks;
    DelTask.splice(index, 1);
    this.setState({
      tasks: DelTask,
    });
  }
  addTask(task) {
    let newTasks = this.state.tasks;
    newTasks.push({
      id: newTasks.length,
      title: task,
      done: false,
      priority: ''
    });
    this.setState({
      tasks: newTasks,
    });
  }
  onChangeCheck(id, isDone) {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !isDone };
      }
      return task;
    });
    this.setState({
      tasks: newTasks,
    });
    console.log(newTasks);
  }
  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length} </h1>

        {[...activeTasks, ...doneTasks].map((task, index) => (
          <Task
            onChangeCheck={this.onChangeCheck}
            removeTask={this.removeTask}
            task={task}
            key={task.id}
            priority={task.priority}
            index={index}
          />
        ))}
        <TaskInput addTask={this.addTask}> </TaskInput>
      </div>
    );
  }
}
export default App;
