
import './Knapp.css'

import React from 'react';

import navLogo from '../bilder/navLogo.png'
import arbeidstilsynetLogo from '../bilder/arbeidstilsynetLogo.png'
import udiLogo from '../bilder/udiLogo.svg'
import norgeskart from '../bilder/norgeskart.png'
import statensVegvesenLogo from '../bilder/statensVegvesenLogo.webp'
import riksVåpen from '../bilder/riksVåpen.png'
import skatteetatenLogo from '../bilder/skatteetatenLogo.svg'
import politietLogo from '../bilder/politietLogo.jpg'
import tollLogo from '../bilder/tollLogo.jpg'

//funksjon for knappen "Back to My Guide"
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


//bygger selve layouten av resultatene ved hjelp av komponentene under denne
export const Resultater = () => {
    return (
        <div>
            <TilbakeKnapp
                tekst="Back to My Guide"
                handleClassName="tilbakeKnapp"
            />

            <div className="mine-plikter-del">
                <h1>My Results</h1>
                <h2>My Duties</h2>

                <MeldeFlytte />

                <RegHosPolitiet />

                <IdentitetsNummer />

                <Skattekort />

            </div>

            <div>
                <MineRettigheter />
            </div>

            <div>
                <NyttigInformasjon />
            </div>

            <div>
                <VidereFremover />
            </div>

        </div>
    );
}

//må endres slik at komponenter med mer enn ett ikon og/eller flere lenker vises riktig
//lenker må åpnes i nytt vindu/fane

const Rettigheter = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.tekst}</p>
            <p>{props.lenke}</p>
        </div>
    );
}

const Informasjon = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.tekst}</p>
            <p>{props.lenke}</p>
        </div>
    );
}

const Fremover = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.tekst}</p>
            <p>{props.lenke}</p>
        </div>
    );
}


//statisk del for "My benefits"
const MineRettigheter = () => {
    return (
        
        <div className="mine-rettigheter-del">
            <h2>My Benefits</h2>

            <div className="mine-rettigheter">
                <Rettigheter
                    ikon={navLogo}
                    overskrift="National insurance scheme"
                    tekst="You will be a member of the scheme because you are working in Norway. Membership in the National Insurance Scheme is the key to eligibility for rights to services from NAV. The scheme covers among other things health benefits, pension and parental benefits."
                    lenke="Membership of the National Insurance Scheme - nav.no"
                    lenke="Information about NAV's services and benefits - nav.no"
                />
                <Rettigheter
                    ikon={arbeidstilsynetLogo}
                    overskrift="Labor rights"
                    tekst="When you work in Norway you will have multiple rights for example about working hours, tax or safe working environments."
                    lenke="Working in Norway: Your rights and obligations (arbeidstilsynet.no)"
                />
                <Rettigheter
                    ikon={navLogo}
                    overskrift="Pension rights"
                    tekst="Norwegian pension is a part of the national insurance scheme. The government will start saving up for you when you are paying tax to Norway."
                    lenke="Pensions and pension applications from outside Norway - nav.no"
                />

            </div>
        </div>
    )

}

//statisk del for "Information we think may be relevant for you"
const NyttigInformasjon = () => {
    return (

        <div className="informasjon-relevant-del">
            <h2>Information we think may be relevant for you</h2>

            <div className="informasjon-relevant">
                <Informasjon
                    ikon={udiLogo}
                    overskrift="Bringing your family with you"
                    tekst="As an EU or EEA citizen you have the right to bring your family to Norway, but they may have to apply to move themselves."
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
                    ikon={statensVegvesenLogo}
                    ikon2={tollLogo}
                    overskrift="Bringing your vehicle"
                    tekst="If your vehicle meets Norwegian and European technical requirements, you can bring your car. Register the vehicle with customs when crossing the border. Tolls and taxes apply."
                />
            </div>
        </div>
    )
}

//statisk del
const VidereFremover = () => {
    return (

        <div className="videre-fremover-del">
            <h2>The years ahead</h2>

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
                />
                <Fremover
                    ikon={udiLogo}
                    overskrift="Norwegian citizenship"
                    tekst="The requirements for Norwegian citizenship are not the same for everyone. You have to have permanent recidency in Norway. A Norwegian citizenship can give you more rights."
                />

            </div>
        </div>
    )
}

//må få inn egen className på "hvorfor"-props
const Flytte = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.hvorfor}</p>
            <p>{props.tekst}</p>
        </div>
    );
}

//dynamisk komponent
const MeldeFlytte = () => {
    return (
        <div>

        <Flytte
            ikon={skatteetatenLogo}
            overskrift="Report a move to Norway"
            hvorfor="Why? overskrift med tekstString hentet fra databasen"
            tekst="tekstString fra databasen med URLer - 
                When?
                You should have a tax deduction card before your receive your first salary.
                The tax deduction card is normally ready within five working days after you have applied.

                How?
                Application for tax deduction card for foreign employee - The Norwegian Tax Administration (skatteetaten.no)

                You must choose how to pay tax, there are two different ways; simplified tax scheme and general tax rules. Most new foreign workers in Norway automatically become part of a simplified tax scheme PAYE (Pay As You Earn). Under this scheme, you are taxed at a fixed percentage that your employer deducts from your salary. 

                Your employer automatically retrieves your tax deduction card electronically from the Norwegian Tax Administration."

        />
        </div>
    )}


//må få inn egen className på "hvorfor"-props
const RegPoliti = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.hvorfor}</p>
            <p>{props.tekst}</p>
        </div>
    );
}

//dynamisk komponent
const RegHosPolitiet = () => {
    return (
        <div>

            <RegPoliti
                ikon={politietLogo}
                overskrift="Register as an EU/EEA citizen with the police"
                hvorfor="Why? overskrift med tekstString hentet fra databasen"
                tekst="tekstString fra databasen med URLer - 
                    When?
                    You have to register with the police within 3 months after your arrival to Norway.
                    You are allowed to start working before the registration is completed.

                    How?
                    You have to fill out an application form.
                    If you meet the requirements for registering, the police will issue you a registration certificate
                    Some municipalities have long waiting time."

            />
        </div>
    )}


//må få inn egen className på "hvorfor"-props
const IdNummer = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.hvorfor}</p>
            <p>{props.tekst}</p>
        </div>
    );
}

//dynamisk komponent
const IdentitetsNummer = () => {
    return (
        <div>

            <IdNummer
                ikon={skatteetatenLogo}
                overskrift="National identity number"
                hvorfor="Why? overskrift med tekstString hentet fra databasen"
                tekst="tekstString fra databasen med URLer - 
                    How?
                    If you have reported a move to Norway and meet the criteria, you will be assigned a national identity number.

                    You will receive your identification number in the mail."

            />
        </div>
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

//må få inn egen className på "hvorfor"-props
const Skatt = (props) => {
    return (
        <div className="resultat-boks">
            <div className="resultat-boks-overskrift">
                <h3>{props.overskrift}</h3>
                <img src={props.ikon}></img>
            </div>
            <p>{props.hvorfor}</p>
            <p>{props.tekst}</p>
        </div>
    );
}

//dynamisk komponent
const Skattekort = () => {
    return (
        <div>

            <Skatt
                ikon={skatteetatenLogo}
                overskrift="Tax deduction card"
                hvorfor="Why? overskrift med tekstString hentet fra databasen"
                tekst="tekstString fra databasen med URLer - 
                    When?
                    You should have a tax deduction card before your receive your first salary.
                    The tax deduction card is normally ready within five working days after you have applied.

                    How?
                    Application for tax deduction card for foreign employee - The Norwegian Tax Administration (skatteetaten.no)

                    You must choose how to pay tax, there are two different ways; simplified tax scheme and general tax rules. Most new foreign workers in Norway automatically become part of a simplified tax scheme PAYE (Pay As You Earn). Under this scheme, you are taxed at a fixed percentage that your employer deducts from your salary. 

                    Your employer automatically retrieves your tax deduction card electronically from the Norwegian Tax Administration."

            />
        </div>
    )}

