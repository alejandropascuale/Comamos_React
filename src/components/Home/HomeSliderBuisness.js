import React, { useState, useEffect} from 'react';

function HomeSlider() {
    const [restaurants, setRestaurant] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/api/buisness')
            .then(response => response.json())
            .then(data => {
                const index = [];
                while (index.length < 4) {
                    const r = Math.floor(Math.random() * data.length);
                    if (index.indexOf(r) === -1) index.push(r);
                }
                const randomBuisness = index.map (e => data[e]);
                setRestaurant(randomBuisness)
            })
    }, [])
    return ( 
        <div className="recomendations-format">
            <h2 className="recomendations-title">Por tu zona</h2>
            {restaurants.map((restaurant, x) => {
                return (
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper" key={x}>
                                                
                            <img src={restaurant.avatar} alt="para compartir con" className="swiper-slide" />
                            
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