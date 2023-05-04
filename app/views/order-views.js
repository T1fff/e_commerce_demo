//*ORDER VIEW
export default class orderView {
    DOM_ORDER = document.querySelector(".content")
    
    constructor() {
        
    }

    renderOrder = (PHOTO, TITLE, PRICE, QUANTITY, i) => {
        if (this.DOM_ORDER) {
            const template = `
        <div class="order mb-4 d-flex flex-column justify-content-between">
        <div class="order-title d-flex justify-content-center">
            <h1 class="m-0 p-0 align-self-center text-center">ORDER</h1>
        </div>
        <div class="order-content d-flex flex-column">
        
        ${
            this.renderProductOrdered(PHOTO, TITLE, PRICE, QUANTITY)
        }
        

           
        </div>
    </div>
        `
        this.DOM_ORDER.insertAdjacentHTML("beforeend", template)
        }
        
    }

    renderProductOrdered = (PHOTO, TITLE, PRICE, QUANTITY) => {
        return `
        <div class="product d-flex flex-row justify-content-around">
        <div class="img">
            <img src="${PHOTO}" alt="" srcset="">
        </div>
        <div class="text d-flex flex-column align-self-center">
            <h6>${TITLE}</h6>
            <p class="price">${PRICE}</p>
            <p>Quantity: ${QUANTITY}</p>
            <p>Client: ClientName</p>
            <p>Address: Address</p>
        </div>
    </div>
        `
    }



}