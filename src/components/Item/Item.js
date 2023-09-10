import './Item.css';
import React from 'react';
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock, productoId}) => {
    return(
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                Stock Disponible: {stock}
            </p>
        </section>
        <footer className='ItemFooter'>
            <Link to={`/item/${productoId}`} className='Option'>Ver Detalle</Link>
        </footer>
    </article>
    )
}

export default Item