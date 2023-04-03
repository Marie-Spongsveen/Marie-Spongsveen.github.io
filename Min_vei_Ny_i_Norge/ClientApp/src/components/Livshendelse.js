import './VelgLivssituasjon.css'

export const Livshendelse = (props) => {
    return (
        <div className="livssituasjon-boks">
            <div className="livssituasjon-boks-overskrift">
                <img src={props.ikon}></img>
                <h3>{props.overskrift}</h3>
            </div>
            <p>{props.tekst}</p>
        </div>
    );
}