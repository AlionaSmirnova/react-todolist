import React from "react";

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      value: ''
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
  changeSelect = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { input } = this.state;
    const { value } = this.state;
    return (
      <div className="task-input">
        <input type="text" value={input} onChange={this.inputChange} placeholder="Enter the task.."></input>
        <select value={value} onChange={this.changeSelect} className="select">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select> 
         {/* <p> option: {value}
         </p> */}
        <button onClick={this.addTask}>ADD</button>
      
      </div>
    );
  }
}
export default TaskInput;
