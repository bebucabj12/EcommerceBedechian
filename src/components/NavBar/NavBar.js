import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
        <nav>
            <nav className="nav-extended center">
                <div className="nav-wrapper">
                    <Link to='/'>
                    <a href="#" className="brand-logo">Wessly</a>
                    </Link>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <Link to='/category/remeras'>
                            <li className="tab"><a href="#">Remeras</a></li>
                        </Link>
                        <Link to='/category/hoodie'>
                            <li className="tab"><a href="#">Hoodies</a></li>
                        </Link>
                        <Link to='/category/pantalones'>
                            <li className="tab"><a href="#">Pantalones</a></li>
                        </Link>
                        <Link to='/category/accesorios'>
                            <li className="tab"><a href="#">Accesorios</a></li>
                        </Link>                         
                    </ul>
                </div>
            </nav>
        </nav>
        </>
    )
}
