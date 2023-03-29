import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
      }
    
      sayHello() {
        alert('Hello!');
      }

    render() {
        return (
            <div>
                <h1>Min Vei</h1>
                <p>lorem ipsum bla bla bla</p>
                <div>
                    <button>
                        <Link to="/choseEvent.js">To hey</Link>
                    </button>
                </div>
            </div>
        );
    }
}