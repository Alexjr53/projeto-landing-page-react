import { Link } from "react-router-dom"
import './NavMenu.css'

function NavMenu({className}){
    return(
        <ul className={className}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
        </ul>
    )
}

export default NavMenu