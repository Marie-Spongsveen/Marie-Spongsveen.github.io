import { useState, useEffect } from "react";
import axios from 'axios';
import { LandNedtrekksliste } from './landNedtrekksliste'
import { ResultatKnapp } from './Knapper/ResultatKnapp'
import { Knapp } from './Knapper/TilbakeKnapp'

export const MinVei = () => {
    const [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [svaralternativ, setSvaralternativ] = useState();

    const [forrigeSynlighet, setForrigeSynlighet] = useState(false);
    const [nesteSynlighet, setNesteSynlighet] = useState(true);

    const [landlisteSynlighet, setLandlisteSynlighet] = useState(false);
    const [resultKnappSynlighet, setResultatKnappSynlighet] = useState(false);

    useEffect(() => {
        hentSporsmal()

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

    const svarene =
        svaralternativ?.map(data => {
            return (
                <div key={data.svarAlternativId}>
                    <input type="radio" value={data.svarAlternativId} name="spørsmål"></input>
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

    return (
        <div>
            {
                /*
            <div>
                <label>Hvilket spørsmål nummer vil du ha?</label>
                <input
                    type="number"
                    onChange={(event) => setId(event.target.value)}>
                </input>
            </div>
            */
            }

            <div>Question: {sporsmal}</div>
            {svarene}

            <div style={{ visibility: landlisteSynlighet ? "visible" : "hidden" }}>
                <LandNedtrekksliste />
            </div>

            <div>
                <Knapp
                    navn="Tilbake"
                    handleClick={forrige}
                    handleStyle={{ visibility: forrigeSynlighet ? "visible" : "hidden" }}
                    handleClassName="tilbakeKnapp"
                />

                <Knapp
                    navn="Neste"
                    handleClick={neste}
                    handleStyle={{ visibility: nesteSynlighet ? "visible" : "hidden" }}
                    handleClassName="nesteKnapp"
                />

                <Knapp
                    navn="Go to my results"
                    handleStyle={{ visibility: resultKnappSynlighet ? "visible" : "hidden" }}
                    handleClassName="nesteKnapp"
                />
            </div>
        </div>
    );
}