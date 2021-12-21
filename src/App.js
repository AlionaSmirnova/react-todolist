import React from "react";
import "./App.css";
import Task from "./Task";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, title: "Create todo-app", done: false },
        { id: 1, title: "Write some code", done: true },
        { id: 2, title: "Make a plan", done: false },
      ],
    };
    this.onChangeCheck = this.onChangeCheck.bind(this);
    // this.delTask = this.delTask.bind(this);
  }

  // delTask(){
  //   const DelTask = this.state.tasks.splice((this.task.id));
  // this.setState({
  //   tasks: DelTask,
  // });
  // }

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
  }
  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length} </h1>

        {[...activeTasks, ...doneTasks].map((task) => (
          <Task task={task} key={task.id} onChangeCheck={this.onChangeCheck} />
        ))}
      </div>
    );
  }
}
export default App;
