import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../assets/img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return ( 
        <header>  
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <div className="flex">
                    <Link to="/" exact='true'>
                        <img className="logo" src={logo} alt="logo comamos" />
                    </Link>
                    <h1 className="title-2">Comamos</h1>
                </div>
                <ul>
                    <li><Link to='/user/register'>Registrate</Link></li>
                    <li><Link to='/buisness/register'>Registrate</Link></li>
                    <li><Link to="/user/login">Ingresá a tu cuenta</Link></li>
                    <li><Link to="/buisness/login">Ingresá a tu cuenta de negocio</Link></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;