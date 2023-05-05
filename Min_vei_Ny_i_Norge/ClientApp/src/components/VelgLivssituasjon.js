import { Livshendelse } from './Livshendelse'
import { Knapp } from './Knapp'
import { useNavigate } from "react-router-dom";

import './VelgLivssituasjon.css'

import barnIkon from '../bilder/barn_ikon.png'
import buisnessIkon from '../bilder/business_ikon.png'
import dødArvIkon from '../bilder/død_arv_ikon.png'
import frivilligIkon from '../bilder/frivillig_ikon.png'
import jobbIkon from '../bilder/jobb_ikon.png'
import nyINorgeIkon from '../bilder/ny_norge_ikon.png'
import syktBarnIkon from '../bilder/sykt_barn_ikon.png'

export const VelgLivssituasjon = () => {
    const naviger = useNavigate()

    const navigerHjem = () => {
        naviger("/");
    }

    const navigerGuide = () => {
        naviger("/min-vei")
    }

    return (
        <div>
            <div className="tilbake-knapp">
                <Knapp
                    navn="Back"
                    handleClassName="tilbakeKnapp"
                    handleClick={navigerHjem}
                />
            </div>
           

            <div className="velg-livssituasjon-side">
                <h1>My Digital Guide</h1>
                <h2>Choose your life situation</h2>

                <div className="livssituasjonene">
                    <Livshendelse
                        ikon={nyINorgeIkon}
                        overskrift="New in Norway"
                        tekst="You are moving to Norway temporarily or permanently due to work, studies, family or other reasons."
                        handleClick={navigerGuide}
                    />
                    <Livshendelse
                        ikon={barnIkon}
                        overskrift="Have a child"
                        tekst="You are expecting or have recently had a child."
                    />
                    <Livshendelse
                        ikon={jobbIkon}
                        overskrift="Loose and Find a job"
                        tekst="You have lost your job or are looking for new work."
                    />
                    <Livshendelse
                        ikon={dødArvIkon}
                        overskrift="Death and inheritance"
                        tekst="You are planning the last phase of someone's life or are a caregiver of someone seriously ill or injured."
                    />
                    <Livshendelse
                        ikon={syktBarnIkon}
                        overskrift="Seriously ill child"
                        tekst="You have a chil with needs, chronically ill child or child in hospital."
                    />
                    <Livshendelse
                        ikon={frivilligIkon}
                        overskrift="Start and run a voluntary organization"
                        tekst="You want to start your own voluntary organization or you already have one."
                    />
                    <Livshendelse
                        ikon={buisnessIkon}
                        overskrift="Start and run a business"
                        tekst="You want to start your own business or you already have your own."
                    />
                 </div>
            </div>
        </div>
    );
}