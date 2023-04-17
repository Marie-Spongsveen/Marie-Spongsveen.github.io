import { useState, useEffect } from "react";
import axios from 'axios';

import { LandNedtrekksliste } from './landNedtrekksliste'
import { Knapp } from './Knapp'

export const MinVei = () => {
    const [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [svaralternativ, setSvaralternativ] = useState();

    const [forrigeSynlighet, setForrigeSynlighet] = useState(false);
    const [nesteSynlighet, setNesteSynlighet] = useState(true);

    const [landlisteSynlighet, setLandlisteSynlighet] = useState(false);
    const [resultKnappSynlighet, setResultatKnappSynlighet] = useState(false);

    // hook som inneholder JSONobjekter med hva brukeren svarer på spørsmålene
    const [svartData, setSvartData] = useState({});

    useEffect(() => {
        hentSporsmal()
        console.log(svartData)

        // sjekker hvilket spørsmål man er på, 
        // og gjør de riktige elemtene synlige/usynlige
        switch (id) {
            case 1: 
                setLandlisteSynlighet(true)
                setForrigeSynlighet(false)
                break
            case 2:
                setForrigeSynlighet(true)
                setLandlisteSynlighet(false)
                break
            case 6:
                setNesteSynlighet(true)
                setResultatKnappSynlighet(false)
                break
            case 7:
                setNesteSynlighet(false)
                // vi vet jo egt ikke at siste spørsmål er spørsåml 7,
                // med tanke på at spørsmålene skal kunne endres ut i fra hva man svarer
                setResultatKnappSynlighet(true)
                break
        }
    }, [id])

    const hentSporsmal = () => {
        // henter spørsmålet med id fra hook
        // henter også svaralternativene til spørsmålet

        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        axios.get('hentSvaralternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvaralternativ(response.data)
            });
    }

    const handleChange = (event) => {
        setSvartData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const svarene =
        svaralternativ?.map(data => {
            return (
                <div key={data.svarAlternativId}>
                    <input type="radio" value={data.svarAlternativTekst} onChange={handleChange} name={data.sporsmals.sporsmalet}></input>
                    <label htmlFor={data.svarAlternativId}>{data.svarAlternativTekst}</label>
                </div>
            )
        });

    const neste = () => {
        if (id < 7) setId(prevId => prevId + 1) // 7 må byttes ut med en maks id, eller si når gå til resultat knappen ikke er der
    }

    const forrige = () => {
        if (id > 1) setId(prevId => prevId - 1)
    }

    // denne er ikke testet
    const gaTilResultat = () => {
        axios.post('svar/', svartData)
            .then((response: AxiosResponse<any>) => {
                console.log(response)
            });
    }

    return (
        <div>
            <div>Question: { sporsmal }</div>
            { svarene }

            { landlisteSynlighet && <LandNedtrekksliste /> } 

            <div>
                { forrigeSynlighet && 
                    <Knapp
                        navn="Tilbake"
                        handleClick={ forrige }
                        handleClassName="tilbakeKnapp"
                    />
                }

                { nesteSynlighet &&
                    <Knapp
                        navn="Neste"
                        handleClick={ neste }
                        handleClassName="nesteKnapp"
                    />
                }

                { resultKnappSynlighet &&
                    <Knapp
                        navn="Go to my results"
                        handleClick={ gaTilResultat }
                        handleClassName="nesteKnapp"
                    />
                }
            </div>
        </div>
    );
}