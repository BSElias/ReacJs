import React from 'react'
import { BsBag } from "react-icons/bs";

const CartWidget = () => {
    const cantidadItems = 1 
    return (
        <div>
            <BsBag />
            <p>{cantidadItems}</p>
        </div>
    ) 
}

export default CartWidget