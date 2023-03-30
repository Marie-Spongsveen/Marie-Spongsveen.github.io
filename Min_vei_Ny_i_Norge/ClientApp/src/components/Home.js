import React, { Component } from 'react';
import {Test } from './test'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <Test />
            </div>
        );
    }
}