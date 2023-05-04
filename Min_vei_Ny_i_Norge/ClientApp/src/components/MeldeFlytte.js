import React, { Component } from 'react';
import { StyleSheet, View } from 'react';
//import './styleMeldeFlytte.css'

export class MeldeFlytte extends Component {
    static displayName = MeldeFlytte.name;

    render() {
        return (
            <div class="container">
                <div class='headline'>
                    <h1>My digital Guide</h1>
                </div>
                <div class='infotekst'>
                    <p> This guide is a simulation of your duties, right and benefits. In this guide you will be asked to answer a few questions based on your situation. All the questions are optional, but we recommend answering the ones you can.
                    We do not permanently store any of the information you provide. This not an application, if you wish to apply you need to contact the responsible agency.</p>
                </div>
                <div class='headline'>
                    <h1>Optional log in</h1></div>
                <div class='infotekst'>
                    <p>In order to offer you relevant information, you have the option to log in. By logging in some of the questions can be filled out for you. You can use a Norwegian or European ID to log in.
                    You can also choose to continue without logging in.</p>
                </div>
            </div>
        );
    }
}
