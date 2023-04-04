

export const Resultater = () => {
    return (
        <div>
            <TilbakeKnapp />

            <div className="mine-plikter-del">
                <h1>My Results</h1>
                <h2>My Duties</h2>

                <div className="mine-plikter">
                    <Plikter
                        ikon={}
                        overskrift=""
                        tekst=""
                    />
                    <Plikter
                        ikon={}
                        overskrift=""
                        tekst=""
                    />
                    <Plikter
                        ikon={}
                        overskrift=""
                        tekst=""
                    />
                    <Plikter
                        ikon={}
                        overskrift=""
                        tekst=""
                    />
                    
                </div>
            </div>

            <div className="mine-rettigheter-del">
                <h2>My Benefits</h2>

                <div className="mine-rettigheter">
                    <Rettigheter
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    <Rettigheter
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    <Rettigheter
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    
                </div>
            </div>

            <div className="informasjon-relevant-del">
                <h2>Information we think may be relevant for you</h2>

                <div className="informasjon-relevant">
                    <Informasjon
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    <Informasjon
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    <Informasjon
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                    <Informasjon
                        ikon={ }
                        overskrift=""
                        tekst=""
                    />
                </div>
            </div>

            <div className="videre-fremover-del">
                <h2>The years ahead</h2>

                <div className="videre-fremover">
                    <Informasjon
                        ikon={}
                        overskrift="Voting rights in local elections"
                        tekst="If you have lived in Norway for at least three consecutive years before the date of the election, you gain the right to vote in the local elections. Local elections are considered as municipal and county council elections."
                    />
                    <Informasjon
                        ikon={}
                        overskrift="Permanent residency"
                        tekst="If you have stayed in Norway as an EU/EEA national for at least five years, you can apply for permanent right of residence. This entitles you to stay and work in Norway indefinitely. Your family members may also be eligble."
                    />
                    <Informasjon
                        ikon={}
                        overskrift=""
                        tekst=""
                    />
                    
                </div>
            </div>

        </div>
    );
}
