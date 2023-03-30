import { useState, useEffect } from 'react'
import axios from 'axios';
import ReactDOMServer from 'react-dom/server'

import { LandNedtrekksliste } from './landNedtrekksliste'
import { NesteKnapp } from './Knapper/NesteKnapp'
import { TilbakeKnapp } from './Knapper/TilbakeKnapp'
import { ResultatKnapp } from './Knapper/ResultatKnapp'

export const Test = () => {
    const [sporsmal, setSporsmal] = useState('')
    const [idTeller, setIdTeller] = useState(1)
    useEffect(() => {
        hentSporsmal();
        //hentSvaralternativ()
        switch (idTeller) {
            case 1:
                setLandSynlighet(true);
                break
            case 2:
                a.push('heu')
                a.push('<LandNedtrekksliste />')
                setLandSynlighet(false);
                break
            case 6:
                setResultatKnappSynlighet(false)
                break
            case 7:
                setResultatKnappSynlighet(true)
                break
        }
    }, [idTeller])


    let a = ['teast', '<LandNedtrekksliste />', '<b>s</b>'];
    const landliste = '<LandNedtrekksliste />'

    const hentSporsmal = () => {
        axios.get('hent/' + idTeller)
            .then((res: AxiosResponse<any>) => {
                setSporsmal(res.data)
            });
    }

    const hentSvaralternativ = () => {
        axios.get('hentsvaralternativer/' + idTeller)
            .then((res: AxiosResponse<any>) => {
                console.log(res.data)
            });
    }

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


    const testen = [
        a.map((x) => (
            <div key={String(x)}>
                {x}
            </div>
        ))
    ]



    return (
        <div>
            <button onClick={begynn}>Begynn veiledered</button>
            <p>Spørsmålet: {sporsmal}</p>

     
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

            {a.map((x) => (
                <div key={String(x) }>{x }</div>
            ))}

            <div>{testen }</div>
            <div dangerouslySetInnerHTML={{
                __html: ReactDOMServer.renderToStaticMarkup(testen)
            }} />

            <Avatar />
        </div>
    );

    /*
    <div style={{ visibility: landSynlighet ? 'visible' : 'hidden' }}>
                <LandNedtrekksliste />
            </div>


            <div style={{ visibility: resultatKnappSynlighet ? 'visible' : 'hidden' }}>
                <ResultatKnapp />
            </div>
            */
}

function Avatar() {
    if (landSynlighet = 'visible') {
        return (
            <LandNedtrekksliste />
        );
    }
   
}
