import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GenericButton from './Button';



class App extends Component {

  state = {counter:0};

  handleButtonClick = () => {
    // this.setState({
    //   counter:this.state.counter +1
    // })
    this.setState((prevState)=>({
      counter: prevState.counter+1
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
        <GenericButton onClick={()=>this.handleButtonClick()} value={this.state.counter}/>
      </div>
    );
  }
}

export default App;
