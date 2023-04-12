import { useState, useEffect } from "react";
import axios from 'axios';

export const MinVei = () => {
    const [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [svar, setSvar] = useState();

    useEffect(() => {
        hentSporsmal()
    }, [id])


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

    
    const neste = () => {
        if (id < 7) setId(prevId => prevId + 1)
    }

    const forrige = () => {
        if (id > 1) setId(prevId => prevId - 1)
    }

    const [visLand, setVisLand] = useState(false)

    const visLandListe = () => {
        setVisLand(prev => !prev)
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
          

            {
                //style = { visebility = visLand? "visible": "hidden" }
            }
            
            <button onClick={forrige}>Forrige</button>
            <button onClick={neste}>Neste</button>
            
            <button onClick={hentSporsmal}>Hent spørsmål {id}</button>

            <div>Question: {sporsmal}</div>

            {svarene}
        </div>
    );
}