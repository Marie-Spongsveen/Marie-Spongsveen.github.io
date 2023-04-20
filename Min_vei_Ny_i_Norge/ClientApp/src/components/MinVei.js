import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { LandNedtrekksliste } from './landNedtrekksliste'
import { Knapp } from './Knapp'

import "./MinVei.css"

export const MinVei = () => {
    const naviger = useNavigate();

    const [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [svaralternativ, setSvaralternativ] = useState();

    // Synlighet for elmenter som ikke alltid skal være synlige
    const [forrigeSynlighet, setForrigeSynlighet] = useState(false);
    const [nesteSynlighet, setNesteSynlighet] = useState(true);
    const [landlisteSynlighet, setLandlisteSynlighet] = useState(true);
    const [andreLandListe, setAndreLandListe] = useState(false)
    const [resultKnappSynlighet, setResultatKnappSynlighet] = useState(false);

    // hook som inneholder JSONobjekter med hva brukeren svarer på spørsmålene
    const [svarData, setSvarData] = useState({});
    const [svarDataJSX, setSvarDataJSX] = useState([])

    useEffect(() => {
        // Henter spørsmål til id-en
        hentSporsmal()

        // Formaterer og viser de besvarte spørsmålene
        formaterBesvart()
        
        // Sjekker hvilket spørsmål man er på, 
        // og gjør de riktige elemtene synlige/usynlige
        switch (id) {
            case 1: 
                setLandlisteSynlighet(true)
                setForrigeSynlighet(true)
                break
            case 2:
                setForrigeSynlighet(true)
                break
            case 3:
                setLandlisteSynlighet(false)
                setAndreLandListe(false)
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
        // Henter spørsmålet med rikitg ID fra hook
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        // Henter svaralternativene til samme spørsmålsID
        axios.get('hentSvaralternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvaralternativ(response.data)
            });
    }

    const formaterBesvart = () => {
        // hele metoden kan legges inn i handle change
        const array = []
        for (let i in svarData) {
            // formaterer svardaten til JSX og legger det til i array
            let string =
                <div className="besvarBoks">
                    <p>{i} {svarData[i]}</p>
                    <p onClick={ apneEdit }>edit</p>
                </div>
            array.push(string)
        }
        setSvarDataJSX(array)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log("Value: ", value)

        setSvarData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        // setSvarDataJSX
    }

    const apneEdit = () => {
        // må finne id til spørsmålet
        // så hente spørsmålet
        // så vise spørsmålet
        console.log("edit")
    }

    /* Går igjennom svaralternativene til spørsmålet og formaterer den til JSX med riktige attributter */  
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
        /* Setter id til 1 større for å gå til neste spørsmål */
        if (id < 7) setId(prevId => prevId + 1) // 7 må byttes ut med en maks id, eller si når gå til resultat knappen ikke er der
    }

    const forrige = () => {
        /* Setter id til en midnre for å gå til forrige spørsmål eller forrige side
             Hvis id er større enn 1 blir 1 satt til en mindre, og man går til forrige spørsmål 
             Hvis id == 1 så er man på første spørsmål og går da tilbake til forrige side */
        if (id > 1) setId(prevId => prevId - 1)
        else if (id == 1) naviger("/velg-livssituasjon")
    }

    // denne er ikke testet
    const gaTilResultat = () => {
        /* Sender brukerens svar til bakcken og navigerer brukeren til resultatsiden */
        // event.preventDefault() hva gjør denne? brude jeg ha den?
        axios.post('svar/', svarData)
            .then((response: AxiosResponse<any>) => {
                console.log(response)
            });
        naviger("/resultat")
    }

    const test = (event) => { console.log(event.target.value) }

    return (
        <div className="minVei">
            <h1>My Digital Guide</h1>
            <h2>New in Norway</h2>

            { /* Brukerens svar */}
            { svarDataJSX }

            { /* Viser ett og ett spørsmål med svaralternativer eller eventuelle input */ }
            <h3>{ sporsmal }</h3>
            { svarene }

            { /* Viser nedtrekkslisten med land kun om hooken landlisteSynlighet er true */
                landlisteSynlighet &&
                    <div>
                        <LandNedtrekksliste
                            handleChange={handleChange}
                            handleName="What is your citizenship?"
                            handleValue="land1"
                        />
                        <label>
                            <input type="checkbox" onClick={ () => setAndreLandListe(prev => !prev) }></input>
                            I have multiple citizenships
                        </label>
                    </div>
            }

            {
                andreLandListe &&
                    <div>
                        <h3>What is your second citizenship?</h3>
                        <LandNedtrekksliste
                            handleChange={handleChange}
                            handleName="What is your second citizenship?"
                            handleValue="land2"
                        />
                    </div>
            }

            <div className="knapper">
                { /* Knapp for å gå tilbake
                         Hvis man er på første spørsmål går man tilbake til forrige siden
                         Hvis det er et forrige spørsmål, går man tilbake til det */
                    forrigeSynlighet && 
                        <Knapp
                            navn="Back"
                            handleClick={ forrige }
                            handleClassName="tilbakeKnapp"
                        />
                }

                {
                    nesteSynlighet &&
                        <Knapp
                            navn="Next"
                            handleClick={ neste }
                            handleClassName="nesteKnapp"
                        />
                }

                {
                    resultKnappSynlighet &&
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