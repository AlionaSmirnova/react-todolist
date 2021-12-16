import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';

class  App extends React.Component {
constructor(props){
  super(props);
  this.state={
    todos: ''
  }
}

  render(){
  return (
    <div className="App">
      <header> 
        <h1> 
          ToDo List
        </h1></header>
        <ToDoForm />
    </div>
  );
}
}
export default App;
