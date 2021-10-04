import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return ( 
        <footer className="footer">
            <ul type="none">
                <li><Link to="">Acerca de Nosotros</Link></li>
                <li><Link to="">Contacto</Link></li>
                <li><Link to="">Términos y condiciones</Link></li>
            </ul>
            <ul type="none">
                <li><Link to="/buisness/register">Registrá tu restaurante</Link></li>
                <li><Link to="">Programá tus descuentos</Link></li>
                <li id="copyright">© Comamos - 2021</li>
            </ul>
            <div className="social-media">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
     );
}

export default Footer;