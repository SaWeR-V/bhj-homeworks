const products = Array.from(document.getElementsByClassName('product'));
let cart = document.querySelector('div.cart__products');

products.forEach((product) => {
   const dec = product.querySelector('div.product__quantity-control_dec');
   const inc = product.querySelector('div.product__quantity-control_inc');
   const addToCart = product.querySelector('div.product__add');
   const counter = product.querySelector('div.product__quantity-value');
   const image = product.querySelector('.product__image');

   inc.addEventListener('click', () => {
      let currentCount = parseInt(counter.textContent, 10);
      counter.textContent = currentCount + 1;
   })

   dec.addEventListener('click', () => {
      let currentCount = parseInt(counter.textContent, 10);
      if (currentCount > 1) {
         counter.textContent = currentCount - 1;
      }
   })

   addToCart.addEventListener('click', () => {
      let cartWrapper = document.createElement('div');
      cartWrapper.className = 'cart__product';
      cartWrapper.setAttribute('data-id', product.getAttribute('data-id'));

      let cartCounter = counter.cloneNode(true);
      cartCounter.className = 'cart__product-count';

      let img = image.cloneNode(true);
      img.className = 'cart__product-image';
      
      let goods = cart.querySelectorAll('div.cart__product');
      let productInCart = Array.from(goods).find(elem => {
         return elem.getAttribute('data-id') === product.getAttribute('data-id')
         }
      );

      if (!productInCart) {
         cart.appendChild(cartWrapper);
         cartWrapper.appendChild(cartCounter);
         cartWrapper.appendChild(img);
      }

      else {
         let currentCountInCart = parseInt(productInCart.querySelector('.cart__product-count').innerHTML, 10);
         let countToAdd = parseInt(counter.innerHTML, 10);
         productInCart.querySelector('.cart__product-count').innerHTML = currentCountInCart + countToAdd;
      }

   })
})