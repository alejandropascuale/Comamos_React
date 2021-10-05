window.addEventListener('load', async () => {
    console.log('Estoy conectado');
    let carts = document.querySelectorAll('.btn');
    let products = await (await fetch ('http://localhost:8000/api/products')).json();
    
    for (let i= 0; i< carts.length; i++) {
        carts[i].addEventListener('click', () => {
            let nameProduct = carts[i].parentElement.querySelector('h3').innerText;
            let productSelect = products.filter(p => p.plato == nameProduct);
            
            localStorage.setItem('cartItem', JSON.stringify(productSelect))
            window.location.href = 'http://localhost:8000/user/carrito';
        })     
    }
})

