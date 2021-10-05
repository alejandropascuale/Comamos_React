import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'

function BoxProduct() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => {
                const index = [];
                while (index.length < 7) {
                    const r = Math.floor(Math.random() * data.length);
                    if (index.indexOf(r) === -1) index.push(r);
                }
                const randomProducts = index.map (e => data[e]);
                setProducts(randomProducts)
            })
    }, [])
    return ( 
        <div className="contenedor-1">
        {products.map((product, i) => {
            return (
                <div className="box" key={i}>
                    <Link to=""><FontAwesomeIcon icon={faHeart} /></Link>
                    <Link to={"/product/"+product.idPlato}><FontAwesomeIcon icon={faEye} /></Link>
                    <img src={product.imagen} alt="" />
                    <h3>{product.plato}</h3>
                    <span>${product.precio}</span>
                    <Link to="#" className="btn">Reservar</Link>    
                </div>
                )
            })}
        </div>
     );
}

export default BoxProduct;