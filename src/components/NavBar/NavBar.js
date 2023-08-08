import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Informática Tabares</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/Monitores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Monitores</NavLink>
                <NavLink to={`/category/Parlantes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Parlantes</NavLink>
                <NavLink to={`/category/Teclados`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclados</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar