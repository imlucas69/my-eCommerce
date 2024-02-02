import CartWidget from "../CartWidget/CardWiget"

const NavBar = () => {
    return (
        <nav>
            <h3>E-commerce</h3>
            <div>
                <button>Celulares</button>
                <button>Vehículos</button>
                <button>NoteBooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar