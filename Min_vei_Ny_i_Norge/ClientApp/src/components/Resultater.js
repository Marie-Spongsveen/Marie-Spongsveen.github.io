import React from 'react';


export const Resultater = () => {
    return (
        <div>
            <TilbakeKnapp />

            //dynamisk del med komponenter
            <div className="mine-plikter-del">
                <h1>My Results</h1>
                <h2>My Duties</h2>

                <MeldeFlytte />

                <RegHosPolitiet />

                <Identitetsnummer />

                <Skattekort />

            </div>

            //statisk del
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

            //statisk del
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

            //statisk del
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

        </div>
    );
}


function MeldeFlytte = () => {
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
}

function RegHosPolitiet = () => {
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
}

function IdentitetsNummer = () => {
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
}

function Skattekort = () => {
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
}

//dele opp i komponenter for mer oversiktlig kode - plikter, rettigheter, informasjon og årene fremover 