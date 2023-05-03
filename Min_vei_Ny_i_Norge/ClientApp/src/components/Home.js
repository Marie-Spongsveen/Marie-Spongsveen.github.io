import React, { Component } from 'react';
import './styleFrontPage.css'
// logo login-icon hentet fra https://fonts.google.com/icons?selected=Material+Symbols+Outlined:login:FILL@0;wght@400;GRAD@0;opsz@48&icon.query=log+&icon.platform=web

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div className='forside'>
                <div className='boks'>
                    <div className='headline'>
                        <h1>My digital guide</h1>
                    </div>
                    <div className='infotekst tekstboks'>
                        <p> This guide is a simulation of your duties, right and benefits. In this guide you will be asked to answer a few questions based on your situation. All the questions are optional, but we recommend answering the ones you can.
                            We do not permanently store any of the information you provide. This not an application, if you wish to apply you need to contact the responsible agency.</p>
                    </div>
                    <div className='headline'>
                        <h2>Optional log in</h2></div>
                    <div className='infotekst tekstboks'>
                        <p>In order to offer you relevant information, you have the option to log in. By logging in some of the questions can be filled out for you. You can use a Norwegian or European ID to log in.
                            You can also choose to continue without logging in.</p>
                    </div>
                </div>

                <div class='knappContainer'>
                    <button className='knapp'>Continue without login</button>
                    <button className='knapp'><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z"/></svg>Login</button>
                </div>
            </div>

        );
    }
}