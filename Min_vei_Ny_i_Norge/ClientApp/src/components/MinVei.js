import { useState } from "react";
import axios from 'axios';
import { LandNedtrekksliste } from './landNedtrekksliste'

export const MinVei = () => {
    let [id, setId] = useState(1);
    const [sporsmal, setSporsmal] = useState();
    const [landSynlighet, setLandSynlighet] = useState(false)

    const visibility = landSynlighet ? 'visible' : 'hidden';


    const hentSporsmal = () => {
        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });
    }

    const hentSvaralternativer = () => {
        console.log(id)
        axios.get('hentsvaralternativer/' + id)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            });
    }

    const neste = () => {
        id = parseInt(id);
        setId(i => Math.min(i + 1, 9));
        console.log(id)

        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        fikseSvar();
    }

    const forrige = () => {
        id = parseInt(id);
        setId(i => Math.max(i - 1, 1));
        console.log(id)

        axios.get('hent/' + id)
            .then((response: AxiosResponse<any>) => {
                setSporsmal(response.data)
            });

        fikseSvar();
    }

    const fikseSvar = () => {
        switch (id) {
            case 1:
                setLandSynlighet(true);
            case 2: console.log('id2')
        }


        // eller bedre å bruke en switch??
        if (id == 1) {
        }
        else setLandSynlighet(false);
        //hentSvaralternativer;

        console.log(landSynlighet)

        
    }
    

    return (
        <div>
            <button onClick={hentSporsmal}>Hent spørsmål {id}</button>
            <div>Spørsmålet: {sporsmal}</div>

            <button onClick={forrige}>Back</button>
            <button onClick={neste}>Next</button>

            <div style={{ visibility }}>
                <LandNedtrekksliste />
            </div>
        </div>
    );
}