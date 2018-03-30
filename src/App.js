import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GenericButton from './Button';

function Result (props)  {
  return(
    <div>{props.result}</div>
  )
};

class App extends Component {

  state = {counter:0};

  handleButtonClick = (i) => {
    // this.setState({
    //   counter:this.state.counter +1
    // })
    this.setState((prevState)=>({
      counter: prevState.counter+i
    }));
  };

  

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <GenericButton onClick={()=>this.handleButtonClick(1)} incrementValue={1}/>
        <GenericButton onClick={()=>this.handleButtonClick(2)} incrementValue={2}/>
        <Result result={this.state.counter}/>
      </div>
    );
  }
}

export default App;
