import { useState } from "react";
import axios from 'axios';

export const MinVei = () => {
    const [id, setId] = useState();
    const [sporsmal, setSporsmal] = useState();
    const [svarAlternativer, setSvarAlternativer] = useState([]);


    const hentSporsmal = () => {
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });
    }

    const hentSvarAlternativ = () => {
        axios.get('hentSvarAlternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvarAlternativer(response.data)
                console.log(svarAlternativer) // Add this line to check the content of svarAlternativer
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
            <p></p>
            <p></p>
            <button onClick={hentSvarAlternativ}>Hent svaralternativer for spørsmål {id}</button>
            <div>
                Svaralternativer:
                {svarAlternativer.map((alternativ, index) => (
                    <div key={index}>
                        {alternativ}
                    </div>
                ))}
            </div>
        </div>
    );
}