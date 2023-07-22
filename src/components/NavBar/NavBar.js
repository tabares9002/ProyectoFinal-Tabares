import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Informática Tabares</h3>
            <div>
                <button>Monitores</button>
                <button>Parlantes</button>
                <button>Teclados</button>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar