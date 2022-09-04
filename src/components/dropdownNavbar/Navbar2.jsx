import './navbar2.scss'
import {useState} from 'react'

const Navbar2 = ({children}) => {
    return (
        <nav className="navbar2">
            <ul className="navbar-nav">
                {children}
            </ul>
        </nav>
    )
}

export const NavItem = ({icon, children}) => {
    const [open, setOpen] = useState(false)
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)} >
                {icon}
            </a>
            { open && children}
        </li>
    )
}

export default Navbar2
