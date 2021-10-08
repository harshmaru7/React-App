import React , {Component} from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      item : "",
      task : [],
    }
  };
  onChangeValue = event =>{
    this.setState({item : event.target.value});
  };
  addTask = e =>{
    e.preventDefault()
    this.setState({
      task: [ this.state.item,...this.state.task],
      item: ''
    })
  }; 
   deleteTask = (index) => {
    const newTask = [...this.state.task];
    newTask.splice(index, 1);

    this.setState(state => ({
        task: newTask
    }));}
  
  clearList = () =>{
    this.setState({task: []});
  }
  render(){
    return (

        <div className="App">
        <h1>To Do App! Increase your productivity !</h1>
        <input type="text" value={this.state.value} onChange={this.onChangeValue}/>
        <button type="button" onClick={this.addTask}>Add Task</button>
        {/* <button type="button" onClick={()=>this.deleteTask(index)}>Remove</button> */}
        <button type="button" onClick={this.clearList}>New List</button>
        {/* <div id="div2">{this.state.task.map((person, index) => (
        <p key={index}>{person}</p>))}
        </div> */}
        <div className="App">
        <ul>
                    {this.state.task.map((person, index) => (
                        <li key={index}>
                            <span>{person}  </span>
                            <input type="button" value="Done" onClick={() => this.deleteTask(index)} />

                        </li>
                    ))}
                </ul>
            </div>
    </div>
  );
  }
}

// export default App;
