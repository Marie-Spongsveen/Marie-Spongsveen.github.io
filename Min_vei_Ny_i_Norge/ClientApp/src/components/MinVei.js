import { useState, useEffect } from "react";
import axios from 'axios';

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


        console.log(forrigeSynlighet, id)
        console.log(forrigeSynlighet ? "visible" : "hidden")
    }, [id])


    const hentSporsmal = () => {
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
         
            <button onClick={forrige} style={{ visibility: forrigeSynlighet ? "visible" : "hidden" }}>Forrige</button>
            <button onClick={neste}>Neste</button>
            
            <button onClick={hentSporsmal}>Hent spørsmål {id}</button>

            <div>Question: {sporsmal}</div>

            {svarene}
        </div>
    );
}