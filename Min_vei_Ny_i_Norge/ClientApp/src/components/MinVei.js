import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
    const [skattForklaring, setSkattForklaring] = useState(false)
    const [skattForklringTekst, setSkattForklaringTekst] = useState(false)

    // hook som inneholder JSONobjekter med hva brukeren svarer på spørsmålene
    const [svarData, setSvarData] = useState({});
    const [svarDataJSX, setSvarDataJSX] = useState([])

    useEffect(() => {
        // Henter spørsmål til id-en
        hentSporsmal(id)

        // Formaterer og viser de besvarte spørsmålene
        formaterBesvart()

        // Sender brukerens svar til backend
        // sendSvar()
        
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
                setSkattForklaring(false)
                setSkattForklaringTekst(false)
                break
            case 7:
                // vi vet jo egt ikke at siste spørsmål er spørsåml 7,
                // med tanke på at spørsmålene skal kunne endres ut i fra hva man svarer
                setNesteSynlighet(false)
                setResultatKnappSynlighet(true)
                setSkattForklaring(true)
                break
        }
    }, [id])

    const[idSporsmal, setIdSporsmal] = useState([])

    const hentSporsmal = (id) => {
        // Henter spørsmålet med rikitg ID fra hook
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)

            // denne kan kanskje fjernes
            setIdSporsmal(prev => {
                return {
                        ...prev,
                        [id]: response.data
                    }
                })
            });
       console.log(idSporsmal)

        // Henter svaralternativene til samme spørsmålsID
        axios.get('hentSvaralternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvaralternativ(response.data)
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        /*[name]: {
                    ["spørsmål"]: name,
                    ["svar"]: value
                }*/
        setSvarData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        console.log(svarData)
        // setSvarDataJSX
    }

    const formaterBesvart = () => {
        // hele metoden kan legges inn i handle change
        const array = []
        for (let i in svarData) {
            // formaterer svardaten til JSX og legger det til i array
            let boks =
                <div>
                    <div className="besvar-boks">
                        <p>{i} {svarData[i]}</p>
                        <button onClick={() => apneEdit({ i })} className="edit">edit</button>
                    </div>
                    {editboks}
                </div>
               
            array.push(boks)
        }
        setSvarDataJSX(array)
    }

    const [editboks, setEditboks] = useState()
    const[test, setTest] = useState()

    const apneEdit = (sporsmal) => {
        // må finne id til spørsmålet som skal edites
        // så hente spørsmålet
        // så vise spørsmålet med svaralternativer
        console.log("edit:", sporsmal.i)

        axios.get('hentnoe/' + sporsmal.i)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
                setTest(response.data)
            });


        setEditboks(
            <div className="editApen">
                <h3>{sporsmal.i}</h3>
                {
                    test?.map(data => {
                        return (
                            <div key={data.svarAlternativId} className="radioknapp-rad">
                                <input id={data.svarAlternativId} type="radio" value={data.svarAlternativTekst} onChange={handleChange} name={data.sporsmals.sporsmalet}></input>
                                <label htmlFor={data.svarAlternativId}>{data.svarAlternativTekst}</label>
                            </div>
                        )
                    })
                }
                <Knapp
                    navn="close"
                    handleClick={() => setEditboks()} 
                    handleClassName="tilbakeKnapp"
                />
            </div>
        )
    }

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

    // DENNE ER IKKE TESTET
    const gaTilResultat = () => {
        /* Sender brukerens svar til bakcken og navigerer brukeren til resultatsiden */
        // event.preventDefault() hva gjør denne? brude jeg ha den?
        axios.post('svar/', svarData)
            .then((response: AxiosResponse<any>) => {
                console.log(response)
            });
        naviger("/resultat")
    }

    return (
        <div className="minVei">
            <h1>My Digital Guide</h1>
            <h2>New in Norway</h2>

            { /* Brukerens svar */}
            <div className="besvar-container">
                {svarDataJSX}
            </div>

            { /* Viser ett og ett spørsmål med svaralternativer eller eventuelle input */ }
            <h3>{sporsmal}</h3>

            {
                skattForklaring &&
                <button className="skattforklaringKnapp" onClick={() => setSkattForklaringTekst(prev => !prev)}>
                    <span class="material-symbols-outlined">
                        expand_more
                    </span>
                    What is a tax deduction card?
                </button>
            }
            {
                // TODO: Fiks strek
                skattForklringTekst &&
                <div className="skattforklaringTekstStrek">
                    <span className="material-symbols-outlined strek">
                        horizontal_rule
                    </span>
                    <p className="skattforklaringTekst">A tax deduction card is an electronic document that shows how much tax your employer must deduct or set aside before they pay your salary.</p>
                </div>
            }

            { /* Går igjennom svaralternativene til spørsmålet og formaterer den til JSX med riktige attributter */
                svaralternativ?.map(data => {
                    return (
                        <div key={data.svarAlternativId} className="radioknapp-rad">
                            <input id={data.svarAlternativId} type="radio" value={data.svarAlternativTekst} onChange={handleChange} name={data.sporsmals.sporsmalet}></input>
                            <label htmlFor={data.svarAlternativId}>{data.svarAlternativTekst}</label>
                        </div>
                    )
                })
            }

            { /* Viser nedtrekkslisten med land kun om hooken landlisteSynlighet er true */
                landlisteSynlighet &&
                <div className="landliste">
                        <LandNedtrekksliste
                            handleChange={handleChange}
                            handleName="What is your citizenship?"
                        />
                        <label className="sjekkboks">
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

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </div>
    );
}