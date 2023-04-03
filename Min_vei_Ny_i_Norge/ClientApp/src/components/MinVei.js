import { useState } from "react";
import axios from 'axios';

export const MinVei = () => {
    const [id, setId] = useState();
    const [sporsmal, setSporsmal] = useState();
    const [svar, setSvar] = useState();

    const hentSporsmal = () => {
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        axios.get('hentSvaralternativ/' + id)
            .then((response: AxiosResponse<any>) => {
                setSvar(response.data)

            });
    }

    const svarene =
        svar?.map(data => {
            return (
                <div key={data.svarAlternativId}>
                    <input type="radio" value={data.svarAlternativId} name="spørsmål"></input>
                    <label htmlFor={data.svarAlternativId}>{data.svarAlternativTekst}</label>
                </div>
            )
        });
    
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
            {svarene}
        </div>
    );
}