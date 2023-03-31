import { react } from 'react'
import barnIkon from '../bilder/barn_ikon.png'
import buisnessIkon from '../bilder/business_ikon.png'
import dødArvIkon from '../bilder/død_arv_ikon.png'
import frivilligIkon from '../bilder/frivillig_ikon.png'
import jobbIkon from '../bilder/jobb_ikon.png'
import nyINorgeIkon from '../bilder/ny_norge_ikon.png'
import syktBarnIkon from '../bilder/sykt_barn_ikon.png'
import './VelgLivssituasjon.css'

export const VelgLivssituasjon = () => {
    return (
        <div>
            <button>Back</button>

            <div className="velg-livssituasjon-side">
                <h1>My Digital Guide</h1>
                <h2>Choose your life situation</h2>

                <div className="livssituasjonene">
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={nyINorgeIkon}></img>
                            <h3>New in Norway</h3>
                        </div>
                        <p>You are moving to Norway temporarily or permanently due to work, studies, family or other reasons.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={barnIkon} className="barn-ikon"></img>
                            <h3>Have a child</h3>
                        </div>
                        <p>You are expecting or have recently had a child.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={jobbIkon}></img>
                            <h3>Loose and Find a job</h3>
                        </div>
                        <p>You have lost your job or are looking for new work.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={dødArvIkon}></img>
                            <h3>Death and inheritance</h3>
                        </div>
                        <p>You are planning the last phase of someone's life or are a caregiver of someone seriously ill or injured.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={syktBarnIkon}></img>
                            <h3>Seriously ill child</h3>
                        </div>
                        <p>You have a chil with needs, chronically ill child or child in hospital.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={frivilligIkon}></img>
                            <h3>Start and run a voluntary organization</h3>
                        </div>
                        <p>You want to start your own voluntary organization or you already have one.</p>
                    </div>
                    <div className="livssituasjon-boks">
                        <div className="livssituasjon-boks-overskrift">
                            <img src={buisnessIkon}></img>
                            <h3>Start and run a business</h3>
                        </div>
                        <p>You want to start your own business or you already have your own.</p>
                    </div>
                 </div>
            </div>
        </div>
    );
}