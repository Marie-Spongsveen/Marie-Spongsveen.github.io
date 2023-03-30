import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react';
import ReactDOM from "react-dom";


//basert på https://contactmentor.com/login-form-react-js-code/?utm_content=cmp-true

//export class Innlogging extends Component {
//   static displayName = Innlogging.name;

function Innlogging() {
    //react states
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // user login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: 'user2',
            password: 'pass2'
        }
    ];

    const errors = {
        uname: 'invald username',
        pass: 'inavalid password'
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    }

        //Generate JSX code for error message
        const renderErrorMessage = (name) =>
            name === errorMessages.name && (
                <div className='error'>{errorMessages.message}</div>
            );


        const renderForm = (
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <label> usename</label>
                        <input type='text' name='uname' required></input>
                        {renderErrorMessage("uname")}
                    </div>
                    <div className='input-container'>
                        <label> passpwrd</label>
                        <input type='password' name='pass' required></input>
                        {renderErrorMessage('pass')}
                    </div>
                    <div className='button-container'>
                        <input type='submit'></input>
                    </div>
                </form>
            </div>
        )

        //const handleSumbit = (event) => {
            //prevents page relead
        //    event.preventDefault();
        //};

        return (
            <div className="Innlogging" >
                <div className="login-form">
                    <div className="title">Sign In</div>
                    {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
            </div>
        );
    }


export default Innlogging;


/*

    render() {
        return (
            <div>
            <div> <h1> hello world, her kommer innlogging</h1></div>
            </div>
        )
    };
};*/