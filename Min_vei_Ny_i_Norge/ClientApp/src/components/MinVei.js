import { useState } from "react";
import axios from 'axios';
import { LandNedtrekksliste } from './landNedtrekkslite'

export const MinVei = () => {
    let [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();

    const hentSporsmal = () => {
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        //hentSvaralternativer;
    }

    const hentSvaralternativer = () => {
        axios.get('hentsvaralternativer/' + id)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            });
    }

    const neste = () => {
        id = parseInt(id);
        setId(i => Math.min(i + 1, 8));

        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });
    }

    const forrige = () => {
        id = parseInt(id);

        setId(i => Math.max(i - 1, 1));

        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
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

            <button onClick={forrige}>Back</button>
            <button onClick={neste}>Next</button>

            <LandNedtrekksliste />
        </div>
    );
}