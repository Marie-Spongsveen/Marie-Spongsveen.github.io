import { react } from 'react'
import './VelgLivssituasjon.css'

export const VelgLivssituasjon = () => {
    return (
        <div className="velg-livssituasjon-side">
            <button>Back</button>

            <div className="">
                <h1>My Digital Guide</h1>
                <h2>Choose your life situation</h2>

                <div className="livssituasjonene">
                    <div className="livssituasjon-kolonne">
                        <div className="livssituasjon-boks">
                            <h3>New in Norway</h3>
                            <p>You are moving to Norway temporarily or permanently due to work, studies, family or other reasons.</p>
                        </div>
                        <div className="livssituasjon-boks">
                            <h3>Have a child</h3>
                            <p>You are expecting or have recently had a child.</p>
                        </div>
                        <div className="livssituasjon-boks">
                            <h3>Loose and Find a job</h3>
                            <p>You have lost your job or are looking for new work.</p>
                        </div>
                        <div className="livssituasjon-boks">
                            <h3>Death and inheritance</h3>
                            <p>You are planning the last phase of someone's life or are a caregiver of someone seriously ill or injured.</p>
                        </div>
                    </div>
                    <div className="livssituasjon-kolonne">
                        <div className="livssituasjon-boks">
                            <h3>Seriously ill child</h3>
                            <p>You have a chil with needs, chronically ill child or child in hospital.</p>
                        </div>
                        <div className="livssituasjon-boks">
                            <h3>Start and run a voluntary organization</h3>
                            <p>You want to start your own voluntary organization or you already have one.</p>
                        </div>
                        <div className="livssituasjon-boks">
                            <h3>Start and run a business</h3>
                            <p>You want to start your own business or you already have your own.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}