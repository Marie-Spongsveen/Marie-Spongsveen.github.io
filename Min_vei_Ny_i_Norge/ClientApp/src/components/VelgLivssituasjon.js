﻿import { Livshendelse } from './Livshendelse'
import { TilbakeKnapp } from './Knapper/TilbakeKnapp'

import './VelgLivssituasjon.css'

import barnIkon from '../Bilder/barn_ikon.png'
import buisnessIkon from '../Bilder/business_ikon.png'
import dødArvIkon from '../Bilder/død_arv_ikon.png'
import frivilligIkon from '../Bilder/frivillig_ikon.png'
import jobbIkon from '../Bilder/jobb_ikon.png'
import nyINorgeIkon from '../Bilder/ny_norge_ikon.png'
import syktBarnIkon from '../Bilder/sykt_barn_ikon.png'

export const VelgLivssituasjon = () => {
    return (
        <div>
            <TilbakeKnapp />

            <div className="velg-livssituasjon-side">
                <h1>My Digital Guide</h1>
                <h2>Choose your life situation</h2>

                <div className="livssituasjonene">
                    <Livshendelse
                        ikon={nyINorgeIkon}
                        overskrift="New in Norway"
                        tekst="You are moving to Norway temporarily or permanently due to work, studies, family or other reasons."
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