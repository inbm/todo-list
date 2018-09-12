import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(){
        super();
        this.state = {
            name: "shoplist"
        };
    }
    changeLabelfromParent=(e) => {
        console.log(e);
        
    }
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>{ this.state.name}</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

  export default ShoppingList;