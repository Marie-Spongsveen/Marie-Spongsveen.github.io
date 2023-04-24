import { useState, useEffect } from 'react'
import axios from 'axios';
import ReactDOMServer from 'react-dom/server'

import { LandNedtrekksliste } from './landNedtrekksliste'
import { NesteKnapp } from './Knapper/NesteKnapp'
import { TilbakeKnapp } from './Knapper/TilbakeKnapp'
import { ResultatKnapp } from './Knapper/ResultatKnapp'

export const Test = (props) => {
    const [sporsmal, setSporsmal] = useState('')
    const [idTeller, setIdTeller] = useState(1)
    const [svarAlternativer, setSvarAlternativer] = useState([]);

    const htmlArray = []

    useEffect(() => {

        console.log("idTeller", idTeller);

        hentSporsmal();
        hentSvaralternativer(idTeller);
        
        switch (idTeller) {
            case 1:
                htmlArray.push(<LandNedtrekksliste />)
                setLandSynlighet(true);
                break
            case 2:
                htmlArray.push(<ResultatKnapp />)
                setLandSynlighet(false);
                break
            case 6:
                setResultatKnappSynlighet(false)
                break
            case 7:
                setResultatKnappSynlighet(true)
                break
        }
        console.log(htmlArray)
        
    }, [idTeller])

    const hentSporsmal = () => {
        axios.get('hent/' + idTeller)
            .then((res: AxiosResponse<any>) => {
                setSporsmal(res.data)
            });
    }

    const hentSvaralternativer = (idTeller) => {


        if (idTeller !== undefined) {

            if (idTeller === 3 || idTeller === 4 || idTeller === 6 || idTeller === 7) {

                axios.get(`hentSvarAlternativ/${idTeller}`).then((response) => {
                    setSvarAlternativer(response.data);


                });

            } else {
                setSvarAlternativer([]);

            }
        }
    };

    const handleCheckboxChange = (event) => {
        // TODO: Handle checkbox change
    };

    const [landSynlighet, setLandSynlighet] = useState(false)
    const [resultatKnappSynlighet, setResultatKnappSynlighet] = useState(false)

    const begynn = () => {
        axios.get('hent/' + 1)
            .then((res: AxiosResponse<any>) => {
                console.log(res)
                setSporsmal(res.data)
            });
    }

    const forrige = () => {
        if (idTeller > 1) setIdTeller(x => x - 1)

    }

    const neste = () => {
        if (idTeller < 7) setIdTeller(x => x + 1)
        

    }


    return (
        <div>
            {htmlArray}


            <button onClick={begynn}>Begynn veiledered</button>
            <p>Spørsmålet: {sporsmal}</p>



            <p></p>
            <div>
                {svarAlternativer.map((svarAlternativ) => (
                    <div key={svarAlternativ}>
                        <input
                            type="checkbox"
                            value={svarAlternativ}
                            onChange={handleCheckboxChange}
                        />
                        <label>{svarAlternativ}</label>
                    </div>
                ))}
            </div>
            <p></p>

     
            <div style={{ visibility: landSynlighet ? 'visible' : 'hidden' }}>
                <LandNedtrekksliste />
            </div>


            <div style={{ visibility: resultatKnappSynlighet ? 'visible' : 'hidden' }}>
                <ResultatKnapp />
            </div>

            <div onClick={forrige}>
                <TilbakeKnapp />
            </div>

            <div onClick={neste}>
                <NesteKnapp />
            </div>

        </div>
    );
}