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

//knappen "Back to my guide"
const TilbakeKnapp = (props) => {
    return (
        <div>
            <button
                onClick={props.handleClick}
                style={props.handleStyle}
                className={props.handleClassName}
            >
                {props.tekst}
            </button>
        </div>
    );
}


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
        axios.get('hent-resultater/')
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
                        overskrift="Report a move to Norway"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months"
                        tekst={
                            // resultatTekst[1]
                            <p>
                                <b>When?</b>
                                <br />
                                You should report a move to Norway at earliest 31 days before your arrival
                                and at latest 8 days after your arrival.
                                <br /><br />
                                <b>How?</b>
                                <br />
                                <ol>
                                    <li>
                                        You must <a href="https://www.udi.no/en/want-to-apply/residence-under-the-eueeu-regulations/" target="_blank" rel="noopener noreferrer">
                                            register with the police as an EU/EEA citizen
                                        </a>
                                        . You must do it within your first 3 months in Norway.
                                    </li>
                                    <li>
                                        You must book an appointment with the Tax Administration for an ID check. This applies even if you have lived in Norway before.
                                    </li>
                                    <li>
                                        You must bring the following:
                                    </li>
                                    <ul>
                                        <li>The completed form <a href="https://www.skatteetaten.no/globalassets/skjema/alltid/rf1401_2020e_kodet.pdf" target="_blank" rel="noopener noreferrer">RF-1401: Report a move to Norway from abroad</a></li>
                                        <li>Passport or national ID card</li>
                                        <li>Documentation showing that: you are going to live in Norway for at least 6 months</li>
                                    </ul>
                                </ol>
                            </p>}
                    />

                    <Plikter
                        ikon={politietLogo}
                        overskrift="Register as an EU/EEA citizen with the police"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months and are an EU or EEA citizen"
                        tekst={
                            <p>
                                <b>When?</b>
                                <br />
                                You have to register with the police within 3 months after your arrival to Norway.
                                <br />
                                You are allowed to start working before the registration is completed.
                                <br /><br />
                                <b>How?</b>
                                <br />
                                You have to fill out an <a href="https://forms.udi.no/en/formNext/f5cfe46d-6851-43b4-9b88-0d892189ecd1/kiohmm85_4v5dcbbt/e8dc8249287d" target="_blank" rel="noopener noreferrer">application form</a>.
                                <br />
                                If you meet the requirements for registering, the police will issue you a <a href="https://www.udi.no/en/word-definitions/registration-certificate-for-eueea-nationals/" target="_blank" rel="noopener noreferrer">registration certificate</a>.
                                <br />
                                Some municipalities have long <a href="https://www.politiet.no/en/tjenester/residence-permits-and-protection/waiting-times/to-get-an-appointment-to-register-as-an-EU-EEA-citizen/" target="_blank" rel="noopener noreferrer">waiting time</a>.
                            </p>}
                    />

                    <Plikter
                        ikon={skatteetatenLogo}
                        overskrift="National identity number"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are planning to stay in Norway for more than 6 months"
                        tekst={
                            <p>
                                <b>How?</b>
                                <br />
                                If you have reported a move to Norway and meet the criteria, you will be assigned a national identity number.
                                <br /><br />
                                You will receive your identification number in the mail.
                            </p>
                        }
                    />

                    <Plikter
                        ikon={skatteetatenLogo}
                        overskrift="Tax deduction card"
                        hvorfor="Why do I get this information?"
                        hvorforForklaring="Because you answered that you are going to work in Norway"
                        tekst={
                            <p>
                                <b>When?</b>
                                <br />
                                You should have a tax deduction card before your receive your first salary.
                                The tax deduction card is normally ready within five working days after you have applied.
                                <br /><br />
                                <b>How?</b>
                                <br />
                                <a href="https://www.skatteetaten.no/en/forms/tax-deduction-card-for-foreign-citizens/" target="_blank" rel="noopener noreferrer">Application for tax deduction card for foreign employee - The Norwegian Tax Administration (skatteetaten.no)</a>
                                <br /><br />
                                You must choose how to pay tax, there are two different ways; simplified tax scheme and general tax rules. Most new foreign workers in Norway automatically become part of a simplified tax scheme <a href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards/paye/" target="_blank" rel="noopener noreferrer">PAYE (Pay As You Earn)</a>. Under this scheme, you are taxed at a fixed percentage that your employer deducts from your salary.
                                <br /><br />
                                Your employer automatically retrieves your tax deduction card electronically from the Norwegian Tax Administration.
                            </p>} />
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
                        lenkeBeskrivelse="Membership of the National Insurance Scheme - nav.no"
                        lenke2="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits"
                        lenke2Beskrivelse="Information about NAV's services and benefits - nav.no"
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
                        lenkeBeskrivelse="Pensions and pension applications from outside Norway - nav.no"
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
                        overskrift="Bringing your family with you"
                        tekst="As an EU or EEA citizen you have the right to bring your family to Norway, but they may have to apply to move themselves."
                        lenke="https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/?resetguide=1"
                        lenkeBeskrivelse="Want to apply: Family immigration with a Norwegian or Nordic citizen - UDI"
                    />
                    <Informasjon
                        ikon={norgeskart}
                        overskrift="Norwegian language course"
                        tekst="Learning Norwegian makes it easier to navigate through the city, understand the culture and getting involved in your local community. Some municipals arrange language courses, you will have to check your municipal."
                    />
                    <Informasjon
                        ikon={statensVegvesenLogo}
                        overskrift="Exchanging your driver's license"
                        tekst="If you have a driving license issued in another EU/EEA country, it is valid for driving in Norway providing the licence is still valid. If you are living permanently in Norway, you can use your driving license for driving in Norway or exchange it for a Norwegian driving license."
                    />
                    <Informasjon
                        ikon={tollLogo}
                        overskrift="Bringing your vehicle"
                        tekst="If your vehicle meets Norwegian and European technical requirements, you can bring your car. Register the vehicle with customs when crossing the border. Tolls and taxes apply."
                        lenke="https://www.toll.no/en/goods/motor-vehicles/importing-cars-and-other-vehicles/"
                        lenkeBeskrivelse="Importing cars and other vehicles - Norwegian Customs - (toll.no)"
                        lenke2="https://www.vegvesen.no/en/vehicles/buy-and-sell/import/import-of-vehicles/"
                        lenke2Beskrivelse="Import of vehicles - Statens vegvesen"
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
                        overskrift="Voting rights in local elections"
                        tekst="If you have lived in Norway for at least three consecutive years before the date of the election, you gain the right to vote in the local elections. Local elections are considered as municipal and county council elections."
                    />
                    <Fremover
                        ikon={udiLogo}
                        overskrift="Permanent residency"
                        tekst="If you have stayed in Norway as an EU/EEA national for at least five years, you can apply for permanent right of residence. This entitles you to stay and work in Norway indefinitely. Your family members may also be eligble."
                        lenke="https://www.udi.no/en/want-to-apply/permanent-residence/permanent-right-of-residence-for-eueea-nationals/"
                        lenkeBeskrivelse="Want to apply: Permanent right of residence for EU/EEA nationals"
                    />
                    <Fremover
                        ikon={udiLogo}
                        overskrift="Norwegian citizenship"
                        tekst="The requirements for Norwegian citizenship are not the same for everyone. You have to have permanent recidency in Norway. A Norwegian citizenship can give you more rights."
                        lenke="https://www.udi.no/en/want-to-apply/citizenship/citizenship-for-eueea-nationals-who-have-held-a-residence-permit-in-norway/"
                        lenkeBeskrivelse="Want to apply: Citizenship for EU/EEA nationals who have held a residence permit in Norway"
                    />

                </div>
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </div>
    );
}

//må endres slik at komponenter med mer enn ett ikon og/eller flere lenker vises riktig
//lenker må åpnes i nytt vindu/fane

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
                    <a href={props.lenke2} target="_blank" rel="noopener noreferrer">
                        {props.lenke2Beskrivelse}
                    </a>
                </div>
            </div>
        </div>
    );
}


//statisk del for "My benefits"
const MineRettigheter = () => {
    return (
        
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
                    lenkeBeskrivelse="Membership of the National Insurance Scheme - nav.no"
                    lenke2="https://www.nav.no/en/home/benefits-and-services/information-about-nav-s-services-and-benefits"
                    lenke2Beskrivelse="Information about NAV's services and benefits - nav.no"
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
                    lenkeBeskrivelse="Pensions and pension applications from outside Norway - nav.no"
                />

            </div>
        </div>
    )

}

//statisk del for "Information we think may be relevant for you"
const NyttigInformasjon = () => {
    return (

        <div className="informasjon-relevant-del">

            <div className="resultater-h2 overskrift2">
                <h2>Information we think may be relevant for you</h2>
            </div>
            

            <div className="informasjon-relevant">
                <Informasjon
                    ikon={udiLogo}
                    overskrift="Bringing your family with you"
                    tekst="As an EU or EEA citizen you have the right to bring your family to Norway, but they may have to apply to move themselves."
                    lenke="https://www.udi.no/en/want-to-apply/family-immigration/family-immigration-with-norwegian-or-nordic-citizen/?resetguide=1"
                    lenkeBeskrivelse="Want to apply: Family immigration with a Norwegian or Nordic citizen - UDI"
                />
                <Informasjon
                    ikon={norgeskart}
                    overskrift="Norwegian language course"
                    tekst="Learning Norwegian makes it easier to navigate through the city, understand the culture and getting involved in your local community. Some municipals arrange language courses, you will have to check your municipal."
                />
                <Informasjon
                    ikon={statensVegvesenLogo}
                    overskrift="Exchanging your driver's license"
                    tekst="If you have a driving license issued in another EU/EEA country, it is valid for driving in Norway providing the licence is still valid. If you are living permanently in Norway, you can use your driving license for driving in Norway or exchange it for a Norwegian driving license."
                />
                <Informasjon
                    ikon={tollLogo}
                    overskrift="Bringing your vehicle"
                    tekst="If your vehicle meets Norwegian and European technical requirements, you can bring your car. Register the vehicle with customs when crossing the border. Tolls and taxes apply."
                    lenke="https://www.toll.no/en/goods/motor-vehicles/importing-cars-and-other-vehicles/"
                    lenkeBeskrivelse="Importing cars and other vehicles - Norwegian Customs - (toll.no)"
                    lenke2="https://www.vegvesen.no/en/vehicles/buy-and-sell/import/import-of-vehicles/"
                    lenke2Beskrivelse="Import of vehicles - Statens vegvesen"
                />
            </div>
        </div>
    )
}

//statisk del
const VidereFremover = () => {
    return (

        <div className="videre-fremover-del">

            <div className="resultater-h2 overskrift2">
                <h2>The years ahead</h2>
            </div>
            

            <div className="videre-fremover">
                <Fremover
                    ikon={riksVåpen}
                    overskrift="Voting rights in local elections"
                    tekst="If you have lived in Norway for at least three consecutive years before the date of the election, you gain the right to vote in the local elections. Local elections are considered as municipal and county council elections."
                />
                <Fremover
                    ikon={udiLogo}
                    overskrift="Permanent residency"
                    tekst="If you have stayed in Norway as an EU/EEA national for at least five years, you can apply for permanent right of residence. This entitles you to stay and work in Norway indefinitely. Your family members may also be eligble."
                    lenke="https://www.udi.no/en/want-to-apply/permanent-residence/permanent-right-of-residence-for-eueea-nationals/"
                    lenkeBeskrivelse="Want to apply: Permanent right of residence for EU/EEA nationals"
                />
                <Fremover
                    ikon={udiLogo}
                    overskrift="Norwegian citizenship"
                    tekst="The requirements for Norwegian citizenship are not the same for everyone. You have to have permanent recidency in Norway. A Norwegian citizenship can give you more rights."
                    lenke="https://www.udi.no/en/want-to-apply/citizenship/citizenship-for-eueea-nationals-who-have-held-a-residence-permit-in-norway/"
                    lenkeBeskrivelse="Want to apply: Citizenship for EU/EEA nationals who have held a residence permit in Norway"
                />

            </div>
        </div>
    )
}

//endre tag på hvorfor-boks
const Plikter = (props) => {
    const [hvorforForklaring, setHvorforForklaring] = useState(false)

    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <div className="resultat-boks-overskrift-rad">
                    <img src={props.ikon} alt="Logo" className="resultat-boks-ikon" />

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

//dynamisk komponent
const MeldeFlytte = () => {
    return (
        <Plikter
            ikon={skatteetatenLogo}
            overskrift="Report a move to Norway"
            hvorfor="Why do I get this information?"
            tekst={
                <p>
                    <b>When?</b>
                    <br/>
                    You should report a move to Norway at earliest 31 days before your arrival
                    and at latest 8 days after your arrival.
                    <br /><br />
                    <b>How?</b>
                    <br />
                    <ol>
                        <li>
                            You must <a href="https://www.udi.no/en/want-to-apply/residence-under-the-eueeu-regulations/" target="_blank" rel="noopener noreferrer">
                            register with the police as an EU/EEA citizen
                            </a>
                            . You must do it within your first 3 months in Norway.
                        </li>
                        <li>
                            You must book an appointment with the Tax Administration for an ID check. This applies even if you have lived in Norway before.
                        </li>
                        <li>
                            You must bring the following:
                        </li>
                        <ul>
                            <li>The completed form <a href="https://www.skatteetaten.no/globalassets/skjema/alltid/rf1401_2020e_kodet.pdf" target="_blank" rel="noopener noreferrer">RF-1401: Report a move to Norway from abroad</a></li>
                            <li>Passport or national ID card</li>
                            <li>Documentation showing that: you are going to live in Norway for at least 6 months</li>
                        </ul>
                    </ol>
                </p>}
        />
    )}


//må få inn egen className på "hvorfor"-props
const RegPoliti = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <span className="resultat-boks-overskrift-tittel">
                    <h3>{props.overskrift}</h3>
                </span>
                <img src={props.ikon} alt="Logo of the Norwegian Police" className="resultat-boks-ikon" />
            </div>

            <div className="resultat-boks-hvorfor">
                <p>{props.hvorfor}</p>
            </div>

            <p className="resultat-boks-tekst">
                {props.tekst}
            </p>
        </div>
    );
}

//dynamisk komponent
const RegHosPolitiet = () => {
    return (
            <Plikter
                ikon={politietLogo}
                overskrift="Register as an EU/EEA citizen with the police"
                hvorfor="Why do I get this information?"
                tekst={
                    <p>
                        <b>When?</b>
                        <br/>
                        You have to register with the police within 3 months after your arrival to Norway.
                        <br/>
                        You are allowed to start working before the registration is completed.
                        <br /><br />
                        <b>How?</b>
                        <br />
                        You have to fill out an <a href="https://forms.udi.no/en/formNext/f5cfe46d-6851-43b4-9b88-0d892189ecd1/kiohmm85_4v5dcbbt/e8dc8249287d" target="_blank" rel="noopener noreferrer">application form</a>.
                        <br/>
                        If you meet the requirements for registering, the police will issue you a <a href="https://www.udi.no/en/word-definitions/registration-certificate-for-eueea-nationals/" target="_blank" rel="noopener noreferrer">registration certificate</a>.
                        <br/>
                        Some municipalities have long <a href="https://www.politiet.no/en/tjenester/residence-permits-and-protection/waiting-times/to-get-an-appointment-to-register-as-an-EU-EEA-citizen/" target="_blank" rel="noopener noreferrer">waiting time</a>.
                </p>}
            />
    )}


//må få inn egen className på "hvorfor"-props
const IdNummer = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <span className="resultat-boks-overskrift-tittel">
                    <h3>{props.overskrift}</h3>
                </span>
                <img src={props.ikon} alt="Logo of the Norwegian Tax administration" className="resultat-boks-ikon" />
            </div>

            <div className="resultat-boks-hvorfor">
                <p>{props.hvorfor}</p>
            </div>

            <p className="resultat-boks-tekst">
                {props.tekst}
            </p>
        </div>
    );
}

//dynamisk komponent
const IdentitetsNummer = () => {
    return (
        <Plikter
            ikon={skatteetatenLogo}
            overskrift="National identity number"
            hvorfor="Why do I get this information?"
            tekst={
                <p>
                    <b>How?</b>
                    <br/>
                    If you have reported a move to Norway and meet the criteria, you will be assigned a national identity number.
                    <br/><br/>
                    You will receive your identification number in the mail.
                </p>
                }
        />
    )
}

/*
//Vet ikke im dette er rett måte å få bilder til å bli brukt flere ganger
const navLogo = () => {
    return (
        <div>
            < img src="navLogo.png"/>
        </div>
    )
}
*/

const Skatt = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <span className="resultat-boks-overskrift-tittel">
                    <h3>{props.overskrift}</h3>
                </span>
                <img src={props.ikon} alt="Logo of the Norwegian Tax administration" className="resultat-boks-ikon" />
            </div>

            <div className="resultat-boks-hvorfor">
                <p>{props.hvorfor}</p>
            </div>

            <p className="resultat-boks-tekst">
                {props.tekst}
            </p>
        </div>
    );
}

//dynamisk komponent
const Skattekort = () => {
    return (
            <Plikter
                ikon={skatteetatenLogo}
                overskrift="Tax deduction card"
                hvorfor="Why do I get this information?"
                tekst={
                    <p>
                        <b>When?</b>
                        <br/>
                        You should have a tax deduction card before your receive your first salary.
                        The tax deduction card is normally ready within five working days after you have applied.
                        <br/><br/>
                        <b>How?</b>
                        <br/>
                        <a href="https://www.skatteetaten.no/en/forms/tax-deduction-card-for-foreign-citizens/" target="_blank" rel="noopener noreferrer">Application for tax deduction card for foreign employee - The Norwegian Tax Administration (skatteetaten.no)</a>
                        <br/><br/>
                        You must choose how to pay tax, there are two different ways; simplified tax scheme and general tax rules. Most new foreign workers in Norway automatically become part of a simplified tax scheme <a href="https://www.skatteetaten.no/en/person/foreign/are-you-intending-to-work-in-norway/tax-deduction-cards/paye/" target="_blank" rel="noopener noreferrer">PAYE (Pay As You Earn)</a>. Under this scheme, you are taxed at a fixed percentage that your employer deducts from your salary.
                        <br /><br />
                        Your employer automatically retrieves your tax deduction card electronically from the Norwegian Tax Administration.
                    </p>}
            />
    )}

