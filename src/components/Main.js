import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faEye } from '@fortawesome/free-solid-svg-icons'


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
            <div className="contenedor-1">
                <div className="box">
                    <Link to=""><FontAwesomeIcon icon={faHeart} /></Link>
                    <Link to="/product/"><FontAwesomeIcon icon={faEye} /></Link>
                    <img src="" alt="" />
                    <h3>Nombre Plato</h3>
                    <span>Precio</span>
                    <Link to="#" className="btn">Reservar</Link>
                </div>
            </div>
            </section>
            <section>
                <h2 className="titulo-nuestras-sugerencias">Nuestras sugerencias</h2>
                <div className="nuestras-sugerencias">
                    <div className="recomendations-format">
                        <h2 className="recomendations-title">Para ir con...</h2>
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <img src="" alt="para compartir con" className="swiper-slide" />
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                    <div className="recomendations-format">
                        <h2 className="recomendations-title">Por tu zona</h2>
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                                    
                                    <img src="" alt="para compartir con" className="swiper-slide" />
                                
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
     );
}

export default Footer;