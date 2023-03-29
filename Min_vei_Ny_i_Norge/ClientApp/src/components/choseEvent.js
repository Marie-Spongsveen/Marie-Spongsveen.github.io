import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class choseEvent extends Component {
    static displayName = choseEvent.name;

    render() {
        return (
            <div>
                <h1>Min Vei</h1>
                <p>Du kom deg videre</p>
                <div>
                    <button>
                        <Link to="/components/choseEvent.js">To hey</Link>
                    </button>
                </div>
            </div>
        );

    }
}