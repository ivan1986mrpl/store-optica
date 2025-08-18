(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}})();document.querySelectorAll(".lock-padding");document.querySelector("body");const L=[{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/1.webp","assets/img/san-glass/2.webp","assets/img/san-glass/3.webp","assets/img/san-glass/4.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50sgdgs",model:"Sunglasses with UV protection 1",prices:[200,170]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/11.webp","assets/img/san-glass/12.webp","assets/img/san-glass/13.webp","assets/img/san-glass/14.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50dgs",model:"Sunglasses with UV protection 2",prices:[220,190]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/21.webp","assets/img/san-glass/22.webp","assets/img/san-glass/23.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50sdgsdsh",model:"Sunglasses with UV protection 3",prices:[100,70]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/31.webp","assets/img/san-glass/32.webp","assets/img/san-glass/33.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca5023525",model:"Sunglasses with UV protection 4",prices:[250,200]}],C=({id:s,photo:n,model:r,prices:l})=>{const i=document.createElement("li");return i.classList.add("products__item","product","js-product"),i.innerHTML=`
    <article class="product-final js-link-card" id="${s}">
      <a href="#" class="product__image">
        <div class="product__switch image-switch">
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${n[0]}"
                alt="photo product"></div>
          </div>
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${n[1]}"
                alt="photo product"></div>
          </div>
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${n[2]}"
                alt="photo product"></div>
          </div>
          <div class="image-switch__item">
            <div class="image-switch__image"><img class="image-switch__img js-image-card" src="${n[3]}"
                alt="photo product"></div>
          </div>
        </div>
        <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
      </a>
      <h3 class="product__title js-title-card">
        <a href="#">${r}</a>
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
        <span class="product__testimonials">83 reviews</span>
      </div>
      <div class="product__info">
        <div class="product__article">Article: 879876</div>
        <div class="product__stock">in stock: 13 pcs</div>
      </div>
      <div class="product__price product-price ">
        <div class="product-price__current js-price-card">${l[1]} $</div>
        <div class="product-price__old js-price-card-old">${l[0]} $</div>
      </div>
      <button class="button button--card product__btn js-buy-button">Add to cart</button>
    </article>
  `,i},w=s=>{let n=10,r=1;const l=document.querySelector(".js-products-list"),i=document.querySelector(".js-pagination"),c=document.querySelector(".js-pagination-btn-prev"),d=document.querySelector(".js-pagination-btn-next"),p=(t,e,a,o)=>{e.innerHTML="";const m=a*o-a,_=m+a;t.slice(m,_).forEach(b=>{const f=C(b);e.append(f)})},g=t=>{const e=document.createElement("li");return e.classList.add("pagination-item"),e.textContent=t,r===t&&e.classList.add("active"),e},h=(t,e)=>{const a=Math.ceil(t.length/e),o=document.querySelector(".js-pagination-list");o.innerHTML="";for(let m=1;m<=a;m++){const _=g(m);o.append(_)}i.classList.remove("hidden")},y=()=>{i.addEventListener("click",t=>{if(!t.target.closest(".pagination-item"))return;r=+t.target.textContent,p(s,l,n,r);const e=document.querySelector(".pagination-item.active");e==null||e.classList.remove("active"),t.target.classList.add("active")})},u=t=>{const e=document.querySelector(".pagination-item.active");let a;const o=document.querySelectorAll(".pagination-item");t.target.closest(".js-pagination-btn-next")?(a=e.nextElementSibling,r++):(a=e.previousElementSibling,r--),!a&&t.target.closest(".js-pagination-btn-next")?a=o[0]:a||(a=o[o.length-1]),e.classList.remove("active"),a.classList.add("active"),r>o.length?r=1:r<1&&(r=o.length),p(s,l,n,r)};p(s,l,n,r),h(s,n),y(),d.addEventListener("click",u),c.addEventListener("click",u)},q=document.querySelector(".js-cart"),x=document.querySelector(".js-overlay"),E=document.querySelector(".js-cart-btn"),P=document.querySelectorAll(".js-close-cart"),$=()=>{let s=document.createElement("div");s.style.width="100px",s.style.height="100px",s.style.overflowY="scroll",s.style.visibility="hidden",document.body.append(s);let n=s.offsetWidth-s.clientWidth;return s.remove,n},I=$(),j=s=>{document.body.style.overflow=s?"hidden":"",document.body.style.marginRight=s?`${I}px`:"0px",q.classList.toggle("active",s),x.classList.toggle("active",s)},A=()=>{E.addEventListener("click",()=>{j(!0)})},k=()=>{P.forEach(s=>{s.addEventListener("click",()=>{j(!1)})})},T=()=>{const s=document.querySelector(".js-cart"),n=document.querySelector(".js-products-list"),r=document.querySelector(".js-cart-list"),l=document.querySelector(".js-cart-order-container"),i=document.querySelector(".js-cart-empty-container"),c=new Intl.NumberFormat("ru");(()=>{s.addEventListener("click",t=>{if(!t.target.matches(".js-minus")&&!t.target.matches(".js-plus"))return;const e=t.target.closest(".js-counter"),a=e.querySelector(".js-current-items"),o=e.querySelector(".js-minus");t.target.matches(".js-plus")&&(a.textContent=++a.textContent,o.classList.remove("disabled"),u()),t.target.matches(".js-minus")&&(parseInt(a.textContent)>2?a.textContent=--a.textContent:parseInt(a.textContent)===2&&(a.textContent=--a.textContent,o.classList.add("disabled")),u())})})(),(()=>{n.addEventListener("click",t=>{if(!t.target.classList.contains("js-buy-button"))return;const e=t.target.closest(".js-product"),a=e.querySelector(".js-image-card"),o=e.querySelector(".js-title-card"),m=e.querySelector(".js-price-card"),v={id:e.querySelector(".js-link-card").getAttribute("id"),model:o.textContent,price:m.textContent,photo:a.src},b=r.querySelector(`#${v.id}`);if(b){const f=b.querySelector(".js-current-items"),S=b.querySelector(".js-minus");f.textContent=parseInt(f.textContent)+1,S.classList.remove("disabled")}else g(v);y(),u()})})();const g=t=>{const e=document.createElement("li");e.classList.add("cart__item","item-cart","js-cart-item"),e.innerHTML=`
      <span class="close js-remove"></span>
      <div class="item-cart__wrapper" id="${t.id}">
        <div class="item-cart__image">
          <img src="${t.photo}" alt="product" class="item-cart__img">
        </div>
        <div class="item-cart__descr">
          <div class="item-cart__model">${t.model}</div>
          <div class="item-cart__counter">
            <div class="stapper js-counter">
              <button type="button" class="stapper__button js-minus disabled">–</button>
              <div class="stapper__number js-current-items">1</div>
              <button type="button" class="stapper__button js-plus">+</button>
            </div>
            <div class="item-cart__price">
              <span class="item-cart__price-counter js-cart-price" data-price="${t.price}">${t.price}</span>
              <span class="item-cart__currency">$</span>
            </div>
          </div>
        </div>
      </div>
    `,r.append(e)};(()=>{r.addEventListener("click",t=>{if(!t.target.classList.contains("js-remove"))return;t.target.closest(".js-cart-item").remove(),y(),u()})})();const y=()=>{s.querySelector(".js-cart-item")?(l.classList.remove("hidden"),i.classList.add("hidden")):(l.classList.add("hidden"),i.classList.remove("hidden"))};y();const u=()=>{const t=document.querySelectorAll(".js-cart-item"),e=document.querySelector(".js-cart-total-price");let a=0;t.forEach(o=>{const m=o.querySelector(".js-current-items"),_=o.querySelector(".js-cart-price"),v=parseInt(m.textContent)*parseInt(_.dataset.price.replace(/\s/g,""));_.textContent=c.format(v),a+=v}),e.textContent=c.format(a)};u()},M=()=>{const s=document.querySelectorAll(".product");s&&s.forEach(n=>{let r=n;const l=r.querySelectorAll(".image-switch__item"),i=r.querySelector(".image-pagination");l.length>1&&l.forEach((c,d)=>{c.setAttribute("data-index",d),i.innerHTML+=`
            <li class="image-pagination__item ${d==0?"image-pagination__item--active":""}" data-index="${d}"></li>
          `,c.addEventListener("mouseenter",p=>{r.querySelectorAll(".image-pagination__item").forEach(g=>{g.classList.remove("image-pagination__item--active")}),r.querySelector(`.image-pagination__item[data-index="${p.currentTarget.dataset.index}"]`).classList.add("image-pagination__item--active")}),c.addEventListener("mouseleave",p=>{r.querySelectorAll(".image-pagination__item").forEach(g=>{g.classList.remove("image-pagination__item--active")}),r.querySelector('.image-pagination__item[data-index="0"]').classList.add("image-pagination__item--active")})})})};window.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-products-list"),M(),w(L),A(),k(),T()});
