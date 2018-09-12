import React, { Component } from 'react';
import './App.css';
import Employee from './logic/Employee'
import Group from './logic/Group';
import _log from './logic/_log'
import ShoppingList from './components/ShoppingList'
import Square from './components/Square';
import Button from './components/Button';

import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component {
    

    constructor() {
        super();


        this.id = 2
    this.state = {
        product: "computer",
        information: [
            {
                
                id: 0,
                name: 'lee',
                phone: '010-0000-0000'
            },
            {
                id: 1,
                name: 'kim',
                phone: '010-0000-0001'
            }
        ]
    }

      


        let g = new Group("inbm");

        g.addEmployee(new Employee("a", "1"));
        g.addEmployee(new Employee("b", "2"));
        g.addEmployee(new Employee("v", "3"));

        g._managedEmployees
            .map(e => {
                return e.getFullName().toUpperCase();
            })
            .forEach(e => {
                _log.e("----" + e);
            });




    }

    componentDidMount() {
        this.shoppingList = this.refs.shoppingList;
    }

    handleRecieve = (e) => {
        this.shoppingList.changeLabelfromParent("picture");
        this.shoppingList.setState({ name: "fdsafdsadf" });
        console.log(e);
        this.setState({
            product: e
        })
    }

    handleCreate = (data) => {
        
        const {information} = this.state;

        console.log("handleCreate", information);

        this.setState({
            information: information.concat({ id: this.id++, ...data})
        })
        
    }

    render() {
        const {information} = this.state;
        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList data={this.state.information}/>
                {/*JSON.stringify(information)*/}



                <ShoppingList ref="shoppingList" name={this.state.product} />

                <Button value="click"
                        onReceive={this.handleRecieve}
                />
            </div>
        );
    }
}

export default App;
