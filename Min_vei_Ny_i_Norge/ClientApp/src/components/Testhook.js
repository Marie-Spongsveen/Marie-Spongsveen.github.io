import React, { Component, useState } from 'react';
import ReactDOM from "react-dom/client";
import Styling from "./Styling.css"
import bilde from "./udi_logo_text.jpg"


export default class Testhook extends Component{
    static displayName = Testhook.name;

    render() {
        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
                <Avatar />
                <Infobox />
            </div>
        );
    }
}

function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count +1)
    }

    return (
        <button onClick={handleClick}>
            clicked {count} times
            </ button>
    )
}


function Avatar() {
    return (
        <img
            className="avatar"
            src="https://i.imgur.com/1bX5QH6.jpg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}


function Infobox() {
    return (
        <div className='Infobox'>
            <HeaderBringYourFamily />
            <MainTestBringYourFamily />
            <Link />
            <img src="./udi_logo_text.jpg"/>
        </div>
    )
}

function HeaderBringYourFamily() {
    return (
        <h3 className="text-test"> Bringing your family with you</h3>
    )
}

function MainTestBringYourFamily() {
    return (
        <p>As an EU or EEA citizen you have the right to bring your family to Norway, but they may have to apply to move themselves</p>
    )
}

function Link() {
    return (
        <a href='https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/?resetguide=1 '>Want to apply: Family immigration with a Norwegian or Nordic citizen</a>
    )
}

//https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/?resetguide=1 