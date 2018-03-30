import React, { Component } from 'react';

class GenericButton extends Component { 

    


    render(){
        return(
            <button onClick={()=>this.props.onClick()} >
                {this.props.value}
            </button>
        )
    }
}

module.exports=GenericButton;