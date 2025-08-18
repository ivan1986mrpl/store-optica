(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();document.querySelectorAll(".lock-padding");document.querySelector("body");const L=[{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/1.webp","assets/img/san-glass/2.webp","assets/img/san-glass/3.webp","assets/img/san-glass/4.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50sgdgs",model:"Sunglasses with UV protection 1",prices:[200,170]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/11.webp","assets/img/san-glass/12.webp","assets/img/san-glass/13.webp","assets/img/san-glass/17.webp","assets/img/san-glass/14.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50dgs",model:"Sunglasses with UV protection 2",prices:[220,190]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/21.webp","assets/img/san-glass/22.webp","assets/img/san-glass/23.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca50sdgsdsh",model:"Sunglasses with UV protection 3",prices:[100,70]},{category:"glasses-for-vision",series:"glasses",photo:["assets/img/san-glass/31.webp","assets/img/san-glass/32.webp","assets/img/san-glass/33.webp"],info:"description model glasses for vision",id:"a813bd03-a375-4ad2-aabd-2a1156c6ca5023525",model:"Sunglasses with UV protection 4",prices:[250,200]}],C=()=>{const t=document.querySelectorAll(".product");t&&t.forEach(c=>{let i=c;const l=i.querySelectorAll(".image-switch__item"),r=i.querySelector(".image-pagination");l.length>1&&l.forEach((n,d)=>{n.setAttribute("data-index",d),r.innerHTML+=`
            <li class="image-pagination__item ${d==0?"image-pagination__item--active":""}" data-index="${d}"></li>
          `,n.addEventListener("mouseenter",g=>{i.querySelectorAll(".image-pagination__item").forEach(u=>{u.classList.remove("image-pagination__item--active")}),i.querySelector(`.image-pagination__item[data-index="${g.currentTarget.dataset.index}"]`).classList.add("image-pagination__item--active")}),n.addEventListener("mouseleave",g=>{i.querySelectorAll(".image-pagination__item").forEach(u=>{u.classList.remove("image-pagination__item--active")}),i.querySelector('.image-pagination__item[data-index="0"]').classList.add("image-pagination__item--active")})})})},w=({id:t,photo:c,model:i,prices:l})=>{const r=Math.floor(Math.random()*100)+1,n=Math.floor(Math.random()*221)+80,d=Math.floor(Math.random()*251)+100,g=Math.floor(Math.random()*351)+100,u=(l==null?void 0:l[0])||n,h=Math.round(u*1.3),p=(Array.isArray(c)&&c.length>0?c:["assets/img/san-glass/1.webp"]).filter(Boolean).map(m=>`
        <div class="image-switch__item">
          <div class="image-switch__image">
            <img class="image-switch__img js-image-card" src="${m}" alt="photo product">
          </div>
        </div>
      `).join(""),e=Math.random()<.6,s=Math.random()<.4;let a='<div class="product__labels">';e&&(a+='<div class="product__label product__label_sale js-label-sale">-30%</div>'),s&&(a+='<div class="product__label product__label_new js-label-new">New</div>'),a+="</div>";const o=document.createElement("li");return o.classList.add("products__item","js-product"),o.innerHTML=`
    <article class="product js-link-card" id="${t}">
      <a href="#" class="product__image">
        <div class="product__switch image-switch">
          ${p}
        </div>
        <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
      </a>
      <div class="product__actions">
        <div class="product__links">
          <a href="#" class="product__link product__link_share js-share-product">Share</a>
          <a href="#" class="product__link product__link_favorite js-favorite-product">Like</a>
        </div>
        ${a}
      </div>      
      <h3 class="product__title js-title-card">
        <a href="#">${i}</a>
      </h3>      
      <div class="product__props">
        <div class="product__rating simple-rating">
          <div class="simple-rating__items">
            <input id="simple-rating__5-${t}" type="radio" class="simple-rating__item" name="simple-rating-${t}" value="5">
            <label for="simple-rating__5-${t}" class="simple-rating__label"></label>
            <input id="simple-rating__4-${t}" type="radio" class="simple-rating__item" name="simple-rating-${t}" value="4">
            <label for="simple-rating__4-${t}" class="simple-rating__label"></label>
            <input id="simple-rating__3-${t}" type="radio" class="simple-rating__item" checked name="simple-rating-${t}" value="3">
            <label for="simple-rating__3-${t}" class="simple-rating__label"></label>
            <input id="simple-rating__2-${t}" type="radio" class="simple-rating__item" name="simple-rating-${t}" value="2">
            <label for="simple-rating__2-${t}" class="simple-rating__label"></label>
            <input id="simple-rating__1-${t}" type="radio" class="simple-rating__item" name="simple-rating-${t}" value="1">
            <label for="simple-rating__1-${t}" class="simple-rating__label"></label>
          </div>
        </div>
        <span class="product__testimonials">${d} reviews</span>
      </div>
      <div class="product__info">
        <div class="product__article">Article: ${g}</div>
        <div class="product__stock">in stock: ${r} pcs</div>
      </div>
      <div class="product__price product-price">
        <div class="product-price__current js-price-card">${u} $</div>
        <div class="product-price__old js-price-card-old">${h} $</div>
      </div>
      <button class="button button--card product__btn js-buy-button">Add to cart</button>
    </article>
  `,o},q=t=>{let c=10,i=1;const l=document.querySelector(".js-products-list"),r=document.querySelector(".js-pagination"),n=document.querySelector(".js-pagination-btn-prev"),d=document.querySelector(".js-pagination-btn-next"),g=(e,s,a,o)=>{s.innerHTML="";const m=a*o-a,_=m+a;e.slice(m,_).forEach(f=>{const y=w(f);s.append(y)})},u=e=>{const s=document.createElement("li");return s.classList.add("pagination-item"),s.textContent=e,i===e&&s.classList.add("active"),s},h=(e,s)=>{const a=Math.ceil(e.length/s),o=document.querySelector(".js-pagination-list");o.innerHTML="";for(let m=1;m<=a;m++){const _=u(m);o.append(_)}r.classList.remove("hidden")},v=()=>{r.addEventListener("click",e=>{if(!e.target.closest(".pagination-item"))return;i=+e.target.textContent,g(t,l,c,i);const s=document.querySelector(".pagination-item.active");s==null||s.classList.remove("active"),e.target.classList.add("active")})},p=e=>{const s=document.querySelector(".pagination-item.active");let a;const o=document.querySelectorAll(".pagination-item");e.target.closest(".js-pagination-btn-next")?(a=s.nextElementSibling,i++):(a=s.previousElementSibling,i--),!a&&e.target.closest(".js-pagination-btn-next")?a=o[0]:a||(a=o[o.length-1]),s.classList.remove("active"),a.classList.add("active"),i>o.length?i=1:i<1&&(i=o.length),g(t,l,c,i)};g(t,l,c,i),h(t,c),v(),d.addEventListener("click",p),n.addEventListener("click",p)},$=document.querySelector(".js-cart"),x=document.querySelector(".js-overlay"),P=document.querySelector(".js-cart-btn"),E=document.querySelectorAll(".js-close-cart"),M=()=>{let t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.append(t);let c=t.offsetWidth-t.clientWidth;return t.remove,c},k=M(),j=t=>{document.body.style.overflow=t?"hidden":"",document.body.style.marginRight=t?`${k}px`:"0px",$.classList.toggle("active",t),x.classList.toggle("active",t)},I=()=>{P.addEventListener("click",()=>{j(!0)})},A=()=>{E.forEach(t=>{t.addEventListener("click",()=>{j(!1)})})},T=()=>{const t=document.querySelector(".js-cart"),c=document.querySelector(".js-products-list"),i=document.querySelector(".js-cart-list"),l=document.querySelector(".js-cart-order-container"),r=document.querySelector(".js-cart-empty-container"),n=new Intl.NumberFormat("ru");(()=>{t.addEventListener("click",e=>{if(!e.target.matches(".js-minus")&&!e.target.matches(".js-plus"))return;const s=e.target.closest(".js-counter"),a=s.querySelector(".js-current-items"),o=s.querySelector(".js-minus");e.target.matches(".js-plus")&&(a.textContent=++a.textContent,o.classList.remove("disabled"),p()),e.target.matches(".js-minus")&&(parseInt(a.textContent)>2?a.textContent=--a.textContent:parseInt(a.textContent)===2&&(a.textContent=--a.textContent,o.classList.add("disabled")),p())})})(),(()=>{c.addEventListener("click",e=>{if(!e.target.classList.contains("js-buy-button"))return;const s=e.target.closest(".js-product"),a=s.querySelector(".js-image-card"),o=s.querySelector(".js-title-card"),m=s.querySelector(".js-price-card"),b={id:s.querySelector(".js-link-card").getAttribute("id"),model:o.textContent,price:m.textContent,photo:a.src},f=i.querySelector(`#${b.id}`);if(f){const y=f.querySelector(".js-current-items"),S=f.querySelector(".js-minus");y.textContent=parseInt(y.textContent)+1,S.classList.remove("disabled")}else u(b);v(),p()})})();const u=e=>{const s=document.createElement("li");s.classList.add("cart__item","item-cart","js-cart-item"),s.innerHTML=`
      <span class="close js-remove"></span>
      <div class="item-cart__wrapper" id="${e.id}">
        <div class="item-cart__image">
          <img src="${e.photo}" alt="product" class="item-cart__img">
        </div>
        <div class="item-cart__descr">
          <div class="item-cart__model">${e.model}</div>
          <div class="item-cart__counter">
            <div class="stapper js-counter">
              <button type="button" class="stapper__button js-minus disabled">–</button>
              <div class="stapper__number js-current-items">1</div>
              <button type="button" class="stapper__button js-plus">+</button>
            </div>
            <div class="item-cart__price">
              <span class="item-cart__price-counter js-cart-price" data-price="${e.price}">${e.price}</span>
              <span class="item-cart__currency">$</span>
            </div>
          </div>
        </div>
      </div>
    `,i.append(s)};(()=>{i.addEventListener("click",e=>{if(!e.target.classList.contains("js-remove"))return;e.target.closest(".js-cart-item").remove(),v(),p()})})();const v=()=>{t.querySelector(".js-cart-item")?(l.classList.remove("hidden"),r.classList.add("hidden")):(l.classList.add("hidden"),r.classList.remove("hidden"))};v();const p=()=>{const e=document.querySelectorAll(".js-cart-item"),s=document.querySelector(".js-cart-total-price");let a=0;e.forEach(o=>{const m=o.querySelector(".js-current-items"),_=o.querySelector(".js-cart-price"),b=parseInt(m.textContent)*parseInt(_.dataset.price.replace(/\s/g,""));_.textContent=n.format(b),a+=b}),s.textContent=n.format(a)};p()};window.addEventListener("DOMContentLoaded",()=>{document.querySelector(".js-products-list"),C(),q(L),I(),A(),T()});
