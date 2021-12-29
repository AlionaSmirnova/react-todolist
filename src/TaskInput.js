import React from "react";

class TaskInput extends React.Component {
  state = {
    input: "",
    priority: "High",
  }

  addTask = () => {
    const { input, priority } = this.state;
    if (input) {
      this.props.addTask(input, priority);
      this.setState({ input: "" });
    }
  }

  inputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  changeSelect = (event) => {
    this.setState({
      priority: event.target.value,
    });
  };

  render = () => {
    const { input } = this.state;
    const { priority } = this.state;
    return (
      <div className="task-input">
        <input
          type="text"
          value={input}
          onChange={this.inputChange}
          placeholder="Enter the task.."
        ></input>

        <select
          value={priority}
          onChange={this.changeSelect}
          className="select"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}
export default TaskInput;
