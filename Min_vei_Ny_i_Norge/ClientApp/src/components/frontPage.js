import React, { Component } from 'react';

export class FrontPage extends Component {
    static displayName = FrontPage.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p> dette er test</p>
             <div style= {{border: '2px red', borderRadious:'30px'}}>
                </div>
             </div>
        );
    }
}