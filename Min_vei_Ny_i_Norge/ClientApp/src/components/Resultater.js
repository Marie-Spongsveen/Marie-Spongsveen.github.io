import './Resultater.css'
import './Knapp.css'

import { useState, useEffect } from "react";
import { Knapp } from './Knapp'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import navLogo from '../bilder/navLogo.png'
import arbeidstilsynetLogo from '../bilder/arbeidstilsynetLogo.png'
import udiLogo from '../bilder/udiLogo.svg'
import norgeskart from '../bilder/norgeskart.png'
import statensVegvesenLogo from '../bilder/statensVegvesenLogo.webp'
import riksVåpen from '../bilder/riksVåpen.png'
import skatteetatenLogo from '../bilder/skatteetatenLogo.svg'
import politietLogo from '../bilder/politietLogo.jpg'
import tollLogo from '../bilder/tollLogo.jpg'

//bygger selve layouten av resultatene ved hjelp av komponentene nedenfor
export const Resultater = () => {
    const [resultatTekst, setResultatTekst] = useState([])

    useEffect(() => {
        hentResultat();
    }, []);

    const naviger = useNavigate()

    const gaTilbake = () => {
        naviger("/min-vei")
    }

    const hentResultat = () => {
        axios.get('hentResultat/')
            .then((response: AxiosResponse<any>) => {
                console.log(response.data)
                setResultatTekst(response.data)
            });
    }
    
    return (
        <div className="resultatside">
            <div className="tilbakeKnappResultat">
                <Knapp
                    navn="Back to my guide"
                    handleClassName="tilbakeKnapp"
                    handleClick={gaTilbake}
                />
            </div>
            
            <div className="overskrift1">
                <h1>My Results</h1>
            </div>

            <div className="mine-plikter-del">
                <div className="overskrift2">
                    <h2>My Duties</h2>
                </div>

                <div className="plikter">
                    <Plikter
                        ikon={skatteetatenLogo}
                        ikonBeskrivelse="Logo of the norwegian tax administration authority"
                        overskrift="Report a move to Norway"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months"
                        tekst={<div dangerouslySetInnerHTML={{ __html: resultatTekst[0] }}></div>}
                    />

                    <Plikter
                        ikon={politietLogo}
                        ikonBeskrivelse="Logo of the norwegian police"
                        overskrift="Register as an EU/EEA citizen"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months and are an EU or EEA citizen"
                        tekst={<div dangerouslySetInnerHTML={{ __html: resultatTekst[1] }}></div>}
                    />

                    <Plikter
                        ikon={skatteetatenLogo}
                        ikonBeskrivelse="Logo of the norwegian tax administration authority"
                        overskrift="National identity number"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months"
                        tekst={<div dangerouslySetInnerHTML={{ __html: resultatTekst[2] }}></div>}
                    />

                    <Plikter
                        ikon={skatteetatenLogo}
                        ikonBeskrivelse="Logo of the norwegian tax administration authority"
                        overskrift="Tax deduction card"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are going to work in Norway"
                        tekst={<div dangerouslySetInnerHTML={{ __html: resultatTekst[3] }}></div>}
                    />
                </div>
            </div>

            <div className="mine-rettigheter-del">
                <div className="resultater-h2 overskrift2">
                    <h2>My Benefits</h2>
                </div>

                <div className="mine-rettigheter">
                    <Rettigheter
                        ikon={navLogo}
                        ikonBeskrivelse="Logo of the Norwegian Labour and Welfare Administration"
                        overskrift="National insurance scheme"
                        tekst="You will be a member of the scheme because you are working in Norway. Membership in the National Insurance Scheme is the key to eligibility for rights to services from NAV. The scheme covers among other things health benefits, pension and parental benefits."
                        lenke="https://www.nav.no/en/home/rules-and-regulations/membership-of-the-national-insurance-scheme"
                        lenkeBeskrivelse="Membership of the National Insurance Scheme (nav.no)"
                        lenke2="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits"
                        lenke2Beskrivelse="Information about NAV's services and benefits (nav.no)"
                    />
                    <Rettigheter
                        ikon={arbeidstilsynetLogo}
                        ikonBeskrivelse="Logo of the The Norwegian Labour Inspection Authority"
                        overskrift="Labor rights"
                        tekst="When you work in Norway you will have multiple rights for example about working hours, tax or safe working environments."
                        lenke="https://www.arbeidstilsynet.no/en/knowyourrights/"
                        lenkeBeskrivelse="Working in Norway: Your rights and obligations (arbeidstilsynet.no)"
                    />
                    <Rettigheter
                        ikon={navLogo}
                        ikonBeskrivelse="Logo of the Norwegian Labour and Welfare Administration"
                        overskrift="Pension rights"
                        tekst="Norwegian pension is a part of the national insurance scheme. The government will start saving up for you when you are paying tax to Norway."
                        lenke="https://www.nav.no/en/home/benefits-and-services/pensions-and-pension-application-from-outside-norway"
                        lenkeBeskrivelse="Pensions and pension applications from outside Norway (nav.no)"
                    />
                </div>
            </div>

            <div className="informasjon-relevant-del">
                <div className="resultater-h2 overskrift2">
                    <h2>Information we think may be relevant for you</h2>
                </div>

                <div className="informasjon-relevant">
                    <Informasjon
                        ikon={udiLogo}
                        ikonBeskrivelse="Logo of The Norwegian Directorate of Immigration "
                        overskrift="Bringing your family with you"
                        tekst="As an EU or EEA citizen you have the right to bring your family to Norway, but they may have to apply to move themselves."
                        lenke="https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/?resetguide=1"
                        lenkeBeskrivelse="Want to apply: Family immigration with a Norwegian or Nordic citizen (udi.no)"
                    />
                    <Informasjon
                        ikon={norgeskart}
                        ikonBeskrivelse="A map of Norway"
                        overskrift="Norwegian language course"
                        tekst="Learning Norwegian makes it easier to navigate through the city, understand the culture and getting involved in your local community. Some municipals arrange language courses, you will have to check your municipal."
                    />
                    <Informasjon
                        ikon={statensVegvesenLogo}
                        ikonBeskrivelse="The logo of the Norwegian Public Roads Administration"
                        overskrift="Exchanging your driver's license"
                        tekst="If you have a driving license issued in another EU/EEA country, it is valid for driving in Norway providing the licence is still valid. If you are living permanently in Norway, you can use your driving license for driving in Norway or exchange it for a Norwegian driving license."
                    />
                    <Informasjon
                        ikon={tollLogo}
                        overskrift="Bringing your vehicle"
                        ikonBeskrivelse="Logo of the Norwegian customs"
                        tekst="If your vehicle meets Norwegian and European technical requirements, you can bring your car. Register the vehicle with customs when crossing the border. Tolls and taxes apply."
                        lenke="https://www.toll.no/en/goods/motor-vehicles/importing-cars-and-other-vehicles/"
                        lenkeBeskrivelse="Importing cars and other vehicles - Norwegian Customs (toll.no)"
                        lenke2="https://www.vegvesen.no/en/vehicles/buy-and-sell/import/import-of-vehicles/"
                        lenke2Beskrivelse="Import of vehicles (vegvesen.no)"
                    />
                </div>
            </div>

            <div className="videre-fremover-del">
                <div className="resultater-h2 overskrift2">
                    <h2>The years ahead</h2>
                </div>


                <div className="videre-fremover">
                    <Fremover
                        ikon={riksVåpen}
                        ikonBeskrivelse="A photo of the coat of arms of Norway"
                        overskrift="Voting rights in local elections"
                        tekst="If you have lived in Norway for at least three consecutive years before the date of the election, you gain the right to vote in the local elections. Local elections are considered as municipal and county council elections."
                    />
                    <Fremover
                        ikon={udiLogo}
                        overskrift="Permanent residency"
                        ikonBeskrivelse = "Logo of The Norwegian Directorate of Immigration"
                        tekst="If you have stayed in Norway as an EU/EEA national for at least five years, you can apply for permanent right of residence. This entitles you to stay and work in Norway indefinitely. Your family members may also be eligble."
                        lenke="https://www.udi.no/en/want-to-apply/permanent-residence/permanent-right-of-residence-for-eueea-nationals/"
                        lenkeBeskrivelse="Want to apply: Permanent right of residence for EU/EEA nationals (udi.no)"
                    />
                    <Fremover
                        ikon={udiLogo}
                        overskrift="Norwegian citizenship"
                        ikonBeskrivelse = "Logo of The Norwegian Directorate of Immigration"
                        tekst="The requirements for Norwegian citizenship are not the same for everyone. You have to have permanent recidency in Norway. A Norwegian citizenship can give you more rights."
                        lenke="https://www.udi.no/en/want-to-apply/citizenship/citizenship-for-eueea-nationals-who-have-held-a-residence-permit-in-norway/"
                        lenkeBeskrivelse="Want to apply: Citizenship for EU/EEA nationals who have held a residence permit in Norway (udi.no)"
                    />

                </div>
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </div>
    );
}

const Rettigheter = (props) => {
    return (
        <div className="fremover-boks">
            <img src={props.ikon} alt={props.ikonBeskrivelse} className="resultat-boks-ikon" />

            <div className="fremover-boks-tekst">
                <h3 className="resultat-boks-overskrift-tittel">{props.overskrift}</h3>
                <div>
                    <p className="resultat-boks-tekst">
                        {props.tekst}
                    </p>
                    <a href={props.lenke} target="_blank" rel="noopener noreferrer">
                        {props.lenkeBeskrivelse}
                    </a>
                    <br />
                    <a href={props.lenke2} target="_blank" rel="noopener noreferrer">
                        {props.lenke2Beskrivelse}
                    </a>
                </div>
            </div>
        </div>
    );
}

const Informasjon = (props) => {
    return (
        <div className="fremover-boks">
            <img src={props.ikon} alt={props.ikonBeskrivelse} className="resultat-boks-ikon" />

            <div className="fremover-boks-tekst">
                <h3 className="resultat-boks-overskrift-tittel">{props.overskrift}</h3>
                <div>
                    <p className="resultat-boks-tekst">
                        {props.tekst}
                    </p>
                    <a href={props.lenke} target="_blank" rel="noopener noreferrer">
                        {props.lenkeBeskrivelse}
                    </a>
                    <br />
                    <a href={props.lenke2} target="_blank" rel="noopener noreferrer">
                        {props.lenke2Beskrivelse}
                    </a>
                </div>
            </div>
        </div>
    );
}

const Fremover = (props) => {
    return (
        <div className="fremover-boks">
            <img src={props.ikon} alt={props.ikonBeskrivelse} className="resultat-boks-ikon" />

            <div className="fremover-boks-tekst">
                <h3 className="resultat-boks-overskrift-tittel">{props.overskrift}</h3>

                <div>
                    <p className="resultat-boks-tekst">
                        {props.tekst}
                    </p>
                    <a href={props.lenke} target="_blank" rel="noopener noreferrer">
                        {props.lenkeBeskrivelse}
                    </a>
                    <br />
                    <a href={props.lenke2} target="_blank" rel="noopener noreferrer">
                        {props.lenke2Beskrivelse}
                    </a>
                </div>
            </div>
        </div>
    );
}

const Plikter = (props) => {
    const [hvorforForklaring, setHvorforForklaring] = useState(false)

    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <img src={props.ikon} alt={props.ikonBeskrivelse} className="resultat-boks-ikon" />

                <div>
                    <div className="resultat-boks-overskrift-dott">
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 10.5843C19.5 15.5652 15.4685 19.5994 10.5 19.5994C5.53147 19.5994 1.5 15.5652 1.5 10.5843C1.5 5.6033 5.53147 1.56912 10.5 1.56912C15.4685 1.56912 19.5 5.6033 19.5 10.5843Z" fill="#115073" stroke="#F5AA74" stroke-width="3" />
                        </svg>
                        <span className="resultat-boks-overskrift-tittel">
                            <h3>{props.overskrift}</h3>
                        </span>
                    </div>
                    <div className="resultat-boks-hvorfor">
                        <button className="resultat-hvorfor-knapp" onClick={() => setHvorforForklaring(prev => !prev)}>
                            {
                                !hvorforForklaring &&
                                <span class="material-symbols-outlined">
                                    expand_more
                                </span>
                            }
                            {
                                hvorforForklaring &&
                                <span class="material-symbols-outlined">
                                    expand_less
                                </span>
                            }
                            {props.hvorfor}
                        </button>
                        {hvorforForklaring && <p className="hvorfor-forklaring">{props.hvorforForklaring}</p>}
                    </div>
                </div>
            </div>
            
            <p className="resultat-boks-tekst">
                {props.tekst}
            </p>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </div>
    );
}