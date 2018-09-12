import React, { Component } from 'react';

class Square extends React.Component {
  constructor(){
    super();
    this.id = 1;
  }


  render() {
    return (
      <button onClick={ ()=>this.props.onReceive("tefffst") } >
        {this.props.value}
      </button> 
    );
  }
 }

  export default Square;