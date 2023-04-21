import './Knapp.css'

export const Knapp = (props) => {
    return (
        <div>
            <button
                onClick={props.handleClick}
                style={props.handleStyle}
                className={props.handleClassName}
            >
                {props.navn}
            </button>
        </div>
        );
}