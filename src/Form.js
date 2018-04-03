import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
    state = {
        userName:''
    };

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert('Event: Form Submit  '+ this.state.userName);
    //     // axios.get(`https://api.github.com/users/${this.state.userName}`)
    //     //fetch("https://api.github.com/users/excelstudior")
    //     // .then(function (response) {
    //     //     alert(response);
    //     //   });
    //     axios.get(`https://api.github.com/users/excelstudior`)
    //     .then(function(response){
    //     alert(response);
    //     console.log(response);
    //     })
    // };

    render (){
        return(
            <form onSubmit={()=>this.props.onSubmit()}>
            {/* <form onSubmit={()=>this.handleSubmit(event)}> */}
                <input type="text" placeholder="Github username"
                       value={this.state.userName}
                    //    onChange={(event)=>this.setState({ userName:event.target.value})}
                       onChange={()=>this.props.onChange()}
                       />
                <button type="submit">Add Card</button>
            </form>
        )
    }
}

module.exports = Form;