import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GenericButton from './Button';
import { CardList } from './Card';
import Form from './Form';
import axios from 'axios';

let cardData=[
  { name:"excelstudior",
    url: "https://avatars3.githubusercontent.com/u/20236228?v=4",
    company:"WFS",
  },
  { name:"excelstudior",
    url: "https://avatars3.githubusercontent.com/u/20236228?v=4",
    company:"WFS",
  },
  { name:"excelstudior",
    url: "https://avatars3.githubusercontent.com/u/20236228?v=4",
    company:"WFS",
  },
  { name:"excelstudior",
    url: "https://avatars3.githubusercontent.com/u/20236228?v=4",
    company:"WFS",
  },
  { name:"excelstudior",
    url: "https://avatars3.githubusercontent.com/u/20236228?v=4",
    company:"WFS",
  }
];

function Result (props)  {
  return(
    <div>{props.result}</div>
  )
};

function TestButton (props) {
  return(
    <button onClick={props.onClick}>Test Fetch</button>
  )
}
function TestForm (props){
  return(
    <form onSubmit={props.onSubmit}>
            {/* <form onSubmit={()=>this.handleSubmit(event)}> */}
                <input type="text" placeholder="Github username"
                       value={props.userName}
                       onChange={props.onChange}
                       //onChange={()=>this.props.onChange()}
                       />
                <button type="submit">Add Card</button>
    </form>
  )
}

class App extends Component {

  state = {counter:0,
            userName:''};

  handleButtonClick = (i) => {
    // this.setState({
    //   counter:this.state.counter +1
    // })
    this.setState((prevState)=>({
      counter: prevState.counter+i
    }));
  };

  onChange=(event)=>{
    this.setState({ userName:event.target.value})
  };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Event: Form Submit');
  // };
  testButtonOnClick = (inputValue) =>{
    // fetch("https://api.github.com/users/excelstudior")
    //     .then(function (response) {
    //         alert(response.data);
    //         console.log(response);
    //       });
    console.log(inputValue);
    axios.get(`https://api.github.com/users/excelstudior`)
    .then(function(response){
        alert(response);
        console.log(response);
    })
  }

  onFormInputChange =()=>{
    console.log("input log change");
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> 
        
        */}
        {/* <Form onSubmit={()=>this.handleSubmit(event)}/> */}
        <Form onSubmit={()=>this.testButtonOnClick()}/>
        <GenericButton onClick={()=>this.handleButtonClick(1)} incrementValue={1}/>
        <GenericButton onClick={()=>this.handleButtonClick(2)} incrementValue={2}/>
        <Result result={this.state.counter}/>
        <CardList cards={cardData}/>
        <TestButton onClick={()=>this.testButtonOnClick()}/>
        <TestForm onSubmit={()=>this.testButtonOnClick()} onChange={()=>this.onChange()}/>
      </div>
    );
  }
}

export default App;
