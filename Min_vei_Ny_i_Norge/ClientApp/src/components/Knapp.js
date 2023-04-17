import './Knapp.css'

export const Knapp = (props) => {
    return (
        <div>
            <button onClick={props.handleClick} className={props.handleClassName}>{props.navn}</button>
        </div>
    );
}