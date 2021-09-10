import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from '../Cart/CartWidget'

export default function NavBar() {
    return (
        <nav>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Wessly</a>
                    <CartWidget/>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#">Remeras</a></li>
                        <li className="tab"><a href="#">Hoodies</a></li>
                        <li className="tab"><a href="#">Pantalones</a></li>
                        <li className="tab"><a href="#">Accesorios</a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    )
}
