import React, { Component } from 'react';

class GenericButton extends Component { 

    render(){
        return(
            <button onClick={()=>this.props.onClick()} >
                {this.props.incrementValue}
            </button>
        )
    }
}

module.exports = GenericButton;