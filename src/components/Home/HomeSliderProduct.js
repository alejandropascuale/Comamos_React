import React, { useState, useEffect} from 'react';

function HomeSlider() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => {
                const index = [];
                while (index.length < 4) {
                    const r = Math.floor(Math.random() * data.length);
                    if (index.indexOf(r) === -1) index.push(r);
                }
                const randomProducts = index.map (e => data[e]);
                setProducts(randomProducts)
            })
    }, [])
    return ( 
        
        <div className="recomendations-format">
            <h2 className="recomendations-title">Para ir con...</h2>
            {products.map((product, i) => {
                return (
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper" key={i}>
                            <img src={product.imagen} alt="para compartir con" className="swiper-slide" />
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                )
            })}
        </div>
     );
}

export default HomeSlider;