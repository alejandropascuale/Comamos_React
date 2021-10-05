import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BoxProduct from './BoxProduct';
import HomeSliderProduct from './HomeSliderProduct';
import HomeSliderBuisness from './HomeSliderBuisness';


function Footer() {
    return ( 
        <main id="blur">
            <div className="parallax">
                <h1 className="frase-main">Elegí tu plato en tu restaurante favorito, sentate y listo</h1>
                <div className="search">
                    <form action="" method="">

                        <label for="busqueda1"></label>
                        <input type="text" name="busqueda1" id="busqueda1" placeholder="Restaurante, tipo de comida..." />

                        <label for="busqueda2"></label>
                        <input type="text" name="busqueda2" className="box-mobile" id="busqueda2"
                            placeholder="Cerca de mi dirección" />

                        <select name="filtrar" id="filtrar" className="box-mobile">
                            <option value="filtra">Filtra tu búsqueda</option>
                        </select>
                        <button type="submit" name="buscar" id="boton-buscar">Buscar</button>
                        <FontAwesomeIcon icon={faSearch} id='boton-lupa' />
                    </form>
                </div>
            </div>
            <section className="los-mas-elegidos">
                <h2 className="titulo-los-mas-elegidos">Los más elegidos</h2> 
                <BoxProduct />
            </section>
            <section>
                <h2 className="titulo-nuestras-sugerencias">Nuestras sugerencias</h2>
                <div className="nuestras-sugerencias">
                    <HomeSliderProduct />
                    <HomeSliderBuisness />
                </div>
            </section>
            <script src="../js/shop.js"></script>
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        </main>
     );
}

export default Footer;