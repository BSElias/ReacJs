import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <div>
            <header>
                <h1>Tiger Shop</h1>
                <nav>
                    <ul >
                        <li>Home</li>
                        <li>Nosotros</li>
                        <li>Productos</li>
                        <li>Contactanos</li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar