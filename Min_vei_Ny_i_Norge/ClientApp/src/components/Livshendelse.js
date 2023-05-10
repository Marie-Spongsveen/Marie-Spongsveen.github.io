import './VelgLivssituasjon.css'

export const Livshendelse = (props) => {
    return (
        <button className="livssituasjon-boks tekstboks" tabindex="0" onClick={props.handleClick}>
            <div className="livssituasjon-boks-overskrift">
                <img src={props.ikon} alt={props.altTekst}></img>
                <h3>{props.overskrift}</h3>
            </div>
            <p>{props.tekst}</p>
        </button>
    );
}