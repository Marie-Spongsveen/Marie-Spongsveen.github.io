import './Knapp.css'

export const Knapp = (props) => {
    return (
        <button onClick={props.handleClick} className={props.handleClassName}>{props.navn}</button>
        );
}