import { useState } from "react";
import axios from 'axios';

export const MinVei = () => {
    const [id, setId] = useState();
    const [sporsmal, setSporsmal] = useState();

    const hentSporsmal = () => {
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
        </div>
    );
}