import "../atoms/Button.css"

function Button({title,onClick}){

    return <button id="control-btn" onClick={onClick} >{title}</button>

}

export default Button