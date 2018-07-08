import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={todo:"", todosArr:[]};
  }
  
  render() {
    return (
      <form onSubmit={
        (e)=>{
          e.preventDefault();
          const data=[...this.state.todosArr, this.state.todo];
          this.setState({todosArr:data, todo:""});
        }
      }>
        <input name="todo" 
        value={this.state.todo} 
        onChange={(e)=>{
        this.setState({todo:e.target.value})
        }}/>
        {this.state.todosArr.map((el, ind)=>(<p key={ind}>{ind+1}. {el}</p>))}
      </form>
    );
  }
}

export default App;
