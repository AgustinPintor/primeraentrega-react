import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
         <h3>Ecommerce</h3>
         <div>
            <button>Medias</button>
            <button>Botines</button>
            <button>Canilleras</button>
         </div>
         <CartWidget />
        </nav>
    )
}

export default NavBar