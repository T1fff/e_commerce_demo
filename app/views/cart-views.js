//*CART VIEW
export default class cartView {
    DOM_ALL = document.querySelector("main")
    DOM_PRODUCT_SELECTED = document.querySelector(".cart-content")
    DOM_NAV = document.querySelector(".navbar-collapse")
    DOM_CHECKOUT_TOTAL = document.querySelector(".button-checkout-div")

    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

    delete = () => {
      let product = document.querySelectorAll(".product-cart")
      for (let i = 0; i < product.length; i++) {
          product[i].remove();
      }

  }

    deleteProductSelected  = element =>{
        element.remove()
    }

    renderCart = () => {  
      const template = `
      <div class = "cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <button class="btn cart" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Cart" data-bs-custom-class="custom-tooltip" >
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
          </div>
      `
      this.DOM_NAV.insertAdjacentHTML("beforeend", template)
      
    }

    renderTotal = (TOTAL) => {
      if (this.DOM_CHECKOUT_TOTAL) {
        var insertedContent = document.querySelector(".insertedContent");
        if(insertedContent) {
            insertedContent.parentNode.removeChild(insertedContent);
        }
        const template = `
            <button class="checkout d-flex justify-content-between insertedContent" data-checkout = "checkout">
              <p class="m-0 p-0">Proceed to Checkout</p>
              <p class="total m-0 p-0">TOTAL: $${TOTAL}</p>
            </button>
        
        `
        this.DOM_CHECKOUT_TOTAL.insertAdjacentHTML("beforeend", template)
      }
   
    }
 
    renderProductSelected = (PRODUCT_NAME, PHOTO, PRICE, QUANTITY, PRODUCTID) => {  
      if (this.DOM_PRODUCT_SELECTED) {
        const template = `
        <div class="product-cart d-flex justify-content-between" id = ${PRODUCTID}>
              <div class="img"><img src="${PHOTO}" alt="" srcset=""></div>
              <div class="text d-flex flex-column justify-content-between">
                <div>
                  <h1 class="product-cart-title">${PRODUCT_NAME}</h1>
                  <h5 class="product-cart-price">${PRICE}</h5>
                  <h5 class="product-cart-quantity">QUANTITY: ${QUANTITY}</h1>
                </div>
                <button class="deleteFromCart" data-deletecart = "deletecart" type = "button"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
        `
        this.DOM_PRODUCT_SELECTED.insertAdjacentHTML("afterbegin", template)
      }
        
        
    }
}