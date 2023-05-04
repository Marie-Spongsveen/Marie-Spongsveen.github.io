import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
import './Layout.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                <div className="main">
                    <div>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}