const createProductCard = ({ id, photo, model, prices }) => {
  const random1to100 = Math.floor(Math.random() * 100) + 1;
  const random1to300 = Math.floor(Math.random() * (300 - 80 + 60)) + 60;
  const random100to350 = Math.floor(Math.random() * (350 - 100 + 1)) + 100;
  const random100to450 = Math.floor(Math.random() * (450 - 100 + 1)) + 100;

  const oldPrice = Math.round(prices[0] * 1.3);

  const li = document.createElement("li");
  li.classList.add("products__item", "js-product");

  li.innerHTML = `
    <article class="product js-link-card" id="${id}">
      <a href="#" class="product__image">
        <div class="product__switch image-switch">
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${photo[0]}"
                alt="photo product"></div>
          </div>
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${photo[1]}"
                alt="photo product"></div>
          </div>
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${photo[2]}"
                alt="photo product"></div>
          </div>
        </div>
        <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
      </a>
      <h3 class="product__title js-title-card">
        <a href="#">${model}</a>
      </h3>
      <div class="product__props">
        <div class="product__rating simple-rating">
          <div class="simple-rating__items">
            <input id="simple-rating__5" type="radio" class="simple-rating__item" name="simple-rating" value="5">
            <label for="simple-rating__5" class="simple-rating__label"></label>
            <input id="simple-rating__4" type="radio" class="simple-rating__item" name="simple-rating" value="4">
            <label for="simple-rating__4" class="simple-rating__label"></label>
            <input id="simple-rating__3" type="radio" class="simple-rating__item" checked name="simple-rating"
              value="3">
            <label for="simple-rating__3" class="simple-rating__label"></label>
            <input id="simple-rating__2" type="radio" class="simple-rating__item" name="simple-rating" value="2">
            <label for="simple-rating__2" class="simple-rating__label"></label>
            <input id="simple-rating__1" type="radio" class="simple-rating__item" name="simple-rating" value="1">
            <label for="simple-rating__1" class="simple-rating__label"></label>
          </div>
        </div>
        <span class="product__testimonials">${random100to350} reviews</span>
      </div>
      <div class="product__info">
        <div class="product__article">Article: ${random100to450}</div>
        <div class="product__stock">in stock: ${random1to100} pcs</div>
      </div>
      <div class="product__price product-price ">
        <div class="product-price__current js-price-card">${prices[0]} $</div>
        <div class="product-price__old js-price-card-old">${oldPrice} $</div>
      </div>
      <button class="button button--card product__btn js-buy-button">Add to cart</button>
    </article>
  `;

  return li;
};

export { createProductCard }; //used in file pagination.js
