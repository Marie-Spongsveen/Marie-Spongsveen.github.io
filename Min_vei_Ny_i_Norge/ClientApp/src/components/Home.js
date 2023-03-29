import React, { Component } from 'react';
import { TilbakeKnapp } from './Knapper/TilbakeKnapp'
import { NesteKnapp } from './Knapper/NesteKnapp'
import { LoggInnKnapp } from './Knapper/LoggInnKnapp'
import { IkkeLoggInnKnapp } from './Knapper/IkkeLoggInnKnapp'
import { ResultatKnapp } from './Knapper/ResultatKnapp'
import { TilbakeGuideKnapp } from './Knapper/TilbakeGuideKnapp'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <TilbakeKnapp />
                <NesteKnapp />
                <TilbakeGuideKnapp />
                <LoggInnKnapp />
                <IkkeLoggInnKnapp />
                <ResultatKnapp />
            </div>
        );
    }
}