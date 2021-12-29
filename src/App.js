import React from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import "./App.css";
import Task from "./Task";
import TaskInput from "./TaskInput";
import Modal from "./Modal";
import { Loading } from './Loading'

class App extends React.Component {
  state = {
    tasks: {
      loading: false,
      data: null,
      error: null,
    },
    isOpen: false,
    currentTask: { id: 0, title: "", done: false, priority: "" },
  }

  async componentDidMount() {
    this.fetchToDoList()
  }

  fetchToDoList = async () => {
    try {
      this.setState({
        tasks: {
          ...this.state.tasks,
          loading: true
        }
      })

      const { data: tasks } = await axios.get('/tasks')

      this.setState({
        tasks: {
          loading: false,
          data: tasks,
          error: null
        }
      })
    } catch (error) {
      this.setState({
        tasks: {
          loading: false,
          data: null,
          error
        }
      })
    }
  }

  openModal = (task) => {
    this.setState({
      isOpen: true,
      currentTask: task,
    });
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  removeTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);

    this.setState({ tasks });
  }

  addTask = async (task, priority) => {
    const data = {
      id: uuidv4(),
      title: task,
      done: false,
      priority: priority,
    }

    try {
      this.setState({
        tasks: {
          ...this.state.tasks,
          loading: true
        }
      })

      await axios.post('/tasks', data)

      this.setState({
        tasks: {
          loading: false,
          data: [...this.state.tasks.data, data],
          error: null
        }
      });
    } catch (error) {
      this.setState({
        tasks: {
          loading: false,
          data: null,
          error
        }
      })
    }

    this.fetchToDoList()
  }

  editTask = (id, newTitle) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (id === task.id) {
          return { ...task, title: newTitle };
        }
        return task;
      }),
    });
  }

  handleChangeCheck = () => {
    const { currentTask } = this.state;
    const tasks = this.state.tasks.map((task) => {
      if (task.id === currentTask.id) {
        return { ...task, done: !currentTask.done };
      }
      return task;
    });
    this.setState({
      tasks,
      isOpen: false,
    });
  }

  render() {
    const { loading, data } = this.state.tasks;

    if (loading) {
      return <Loading />
    }

    const tasks = data ? data : []

    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length} </h1>

        {[...activeTasks, ...doneTasks].map((task, index) => {
          return (
            <Task
              onChangeCheck={this.handleChangeCheck}
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
          submitBtn={this.handleChangeCheck}

        />
      </div>
    );
  }
}

export default App