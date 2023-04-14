import { useState, useEffect } from "react";
import axios from 'axios';
import { LandNedtrekksliste } from './landNedtrekksliste'
import { ResultatKnapp } from './Knapper/ResultatKnapp'

export const MinVei = () => {
    const [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [svaralternativ, setSvaralternativ] = useState();
    const [forrigeSynlighet, setForrigeSynlighet] = useState(false);

    //const visibility = forrigeSynlighet ? "visible" : "hidden"

    useEffect(() => {
        hentSporsmal()

        switch (id) {
            case 1:
                setForrigeSynlighet(false)
                break
            case 2:
                setForrigeSynlighet(true)
                break
        }

        if (id == 1) setForrigeSynlighet(false)

        else if (id == 2) setForrigeSynlighet(true)
        // hvorfor kan jeg ikke bruke switch


    const hentSporsmal = () => {
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            });

        axios.get('hentSvaralternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvaralternativ(response.data)
            });
    }

    return (
        <div>
            <div>
                <label>Hvilket spørsmål nummer vil du ha?</label>
                <input
                    type="number"
                    onChange={(event) => setId(event.target.value)}>
                </input>
            </div>
            <button onClick={hentSporsmal}>Hent spørsmål {id}</button>
            <div>Spørsmålet: {sporsmal}</div>
        </div>
    );
}