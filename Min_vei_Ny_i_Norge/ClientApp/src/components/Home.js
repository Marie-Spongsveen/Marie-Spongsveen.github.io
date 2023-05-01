import React, { Component } from 'react';
import './styleFrontPage.css'
// logo login-icon hentet fra https://fonts.google.com/icons?selected=Material+Symbols+Outlined:login:FILL@0;wght@400;GRAD@0;opsz@48&icon.query=log+&icon.platform=web

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }
}