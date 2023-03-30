import { useState } from "react";
import axios from 'axios';
import { LandNedtrekksliste } from './landNedtrekksliste'
import { ResultatKnapp } from './Knapper/ResultatKnapp'

export const MinVei = () => {
    const [landSynlighet, setLandSynlighet] = useState(false)
    const [resultatKnappSynlighet, setResultatKnappSynlighet] = useState(false)
    let counter = 0;
    let id;
    var q = 'a'

    const hentSporsmal = (c) => {
        axios.get('hent/' + c)
            .then((response: AxiosResponse<any>) => {
                q += response.data
                console.log(q)
            });
    }

    const hentSvaralternativer = () => {
        console.log(id)
        axios.get('hentsvaralternativer/' + id)
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
            });
    }

    const neste = async () => {
        counter++;
        console.log(counter)
        hentSporsmal(counter)
        q += '!!!!!!!!!!'
        console.log(q)
    }

    const forrige = () => {
        counter--;
        console.log(counter)
        hentSporsmal(counter)
 }

    const fikseSvar = () => {
        console.log(id);
        switch (id) {
            case 1:
                setLandSynlighet(true);
                setResultatKnappSynlighet(false)
                break
            case 2:
                setResultatKnappSynlighet(true)
                setLandSynlighet(false);
                break
                
        }
        //hentSvaralternativer;

        console.log(landSynlighet)
    }

    const a = () => {
        return q;
    }

    return (
        <div>
            <p>{id}</p>
            <div>Spørsmålet: {a}</div>  

            <button onClick={forrige}>Back</button>
            <button onClick={neste}>Next</button>

            <div style={{ visibility: landSynlighet ? 'visible' : 'hidden' }}>
                <LandNedtrekksliste />
            </div>

            <div style={{ visibility: resultatKnappSynlighet ? 'visible' : 'hidden' }}>
                <ResultatKnapp />
            </div>
        </div>
    );
}