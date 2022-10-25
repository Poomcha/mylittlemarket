import "./Header.css"

import { Link } from "react-router-dom"


export default function Header() {

    return (
        <header className="header">
            <Link to={'/'}>
                <h1 className="header__title">mlm</h1>
            </Link>
        </header>
    )
}