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
                        altTekst="Icon for new in Norway. An open door"
                        overskrift="New in Norway"
                        tekst="You are moving to Norway temporarily or permanently due to work, studies, family or other reasons."
                        handleClick={navigerGuide}
                    />
                    <Livshendelse
                        ikon={barnIkon}
                        altTekst="Icon for new hava a child. A stoler"
                        overskrift="Have a child"
                        tekst="You are expecting or have recently had a child."
                    />
                    <Livshendelse
                        ikon={jobbIkon}
                        altTekst="Icon for Loose and Find a job. A briefcase"
                        overskrift="Loose and Find a job"
                        tekst="You have lost your job or are looking for new work."
                    />
                    <Livshendelse
                        ikon={dødArvIkon}
                        altTekst="Icon for Loose and Find a job. A withering flower"
                        overskrift="Death and inheritance"
                        tekst="You are planning the last phase of someone's life or are a caregiver of someone seriously ill or injured."
                    />
                    <Livshendelse
                        ikon={syktBarnIkon}
                        altTekst="Icon for serciously ild child. A patient laying in a hospital bed"
                        overskrift="Seriously ill child"
                        tekst="You have a chil with needs, chronically ill child or child in hospital."
                    />
                    <Livshendelse
                        ikon={frivilligIkon}
                        altTekst="Icon for start and a voluntary organization. A hand reaching out. A flower is growing from the hand"
                        overskrift="Start and run a voluntary organization"
                        tekst="You want to start your own voluntary organization or you already have one."
                    />
                    <Livshendelse
                        ikon={buisnessIkon}
                        altTekst="Icon for start and run a business. A hand reaching out. A light bulb is growing from the hand"
                        overskrift="Start and run a business"
                        tekst="You want to start your own business or you already have your own."
                    />
                 </div>
            </div>
        </div>
    );
}