import './Button.css'

import { Link } from "react-router-dom"

export default function Button(props) {
    return (
        <button>
            <Link to={props.path}>
                {props.text}
            </Link>           
        </button>
    )
}