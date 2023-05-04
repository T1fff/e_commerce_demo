//*NEWARRIVALS VIEW
export default class arrivalsView{
    DOM_CONTAINER = document.querySelector("main")
    DOM_NEW_ARRIVALS = document.querySelector(".newArrivals")
    
    
    constructor(callback) {
        this.DOM_CONTAINER.addEventListener("click", callback)
    }

    
   
    render = (d) => {     
        var insertedContent = document.querySelector(".insertedContent");
        if(insertedContent) {
            insertedContent.parentNode.removeChild(insertedContent);
        }
        const template = `
        <div class="earrings jewelry insertedContent">
        ${d.map(this.renderArrival).join("")} 
        </div>
        `
        this.DOM_NEW_ARRIVALS.insertAdjacentHTML("afterbegin", template)
         
    }

    renderArrival = ({image, productName, button},i) => {
        return `
        <div class="earrings-product jewelry-p p-3 py-5 d-flex flex-column justify-content-center my-4">
            <img src="${image}" alt="" class="product-image mb-3"/>
            <p class="product-name text-center text-wrap">${productName}</p>
            <button class="button-prod text-center w-25">${button}</button>
        </div>
        `
    }
}