//*PRODUCTS VIEW

export default class productsView{
    DOM_ALL = document.querySelector("main")
    DOM_MAIN = document.querySelector(".products-section")
    
    
    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

    delete = () => {
        let product = document.querySelectorAll(".product")
        for (let i = 0; i < product.length; i++) {
            product[i].remove();
        }

    }
   
    render = (photo, pName, price, productId) => {  
        const template = `
        <div class="product my-2">
            <figure class="effect-bubba" id = ${productId}>
                <img src=${photo} alt="">
                <h3 class="product-name">${pName}</h3>
                <h3 class="price">$${price}</h3>
            <p>
                <button class = "buyNow" data-bs-toggle="modal" data-bs-target="#exampleModal" data-modal = "product-view">I WANT IT</button>
            </p>
            
            </figure>
            
        </div>
        `
        this.DOM_MAIN.insertAdjacentHTML("afterbegin", template)
        
    }

    noAvailability = () => {
        const template = `
        <div class="error-message">
            <h1 class="error-title">Sorry <i class="fa-regular fa-face-sad-cry"></i></h1>
            <p class="m-0">We don't have these right now, but will arrive soon. We promise.</p>
          </div>
          `
        this.DOM_MAIN.insertAdjacentHTML("afterbegin", template)
    }
}