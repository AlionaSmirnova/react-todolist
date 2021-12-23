import React from "react";

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input);
      this.setState({ input: '' });
      console.log(this.props);
    }
  }

  inputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="task-input">
        <input value={input} onChange={this.inputChange}></input>
        {/* <select className="select">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select> */}
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}
export default TaskInput;
