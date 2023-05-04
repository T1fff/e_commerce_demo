//*ORDER CONTROLLER
import orderView from "../views/order-views.js"
import Publisher from "../publisher.js";
import orderModel from "../model/order-model.js";

export default class orderController {
    constructor() {
        this.view = new orderView
        this.model = new orderModel
        
        Publisher.subscribe("ORDERPLACED", this.notifyOrdertoAdmin)
        Publisher.subscribe("ORDER_TOTAL", this.getTotalPrice)
        this.displayProductsOrdered()
        
    }

    displayProductsOrdered = () => {
        const products = this.model.getOrderLclStg()
        products.forEach((product) =>  this.model.loadProductsData(product, this.displayProductOrdered))
        
    }

    notifyOrdertoAdmin = async (products) => {
        if (products) {
            products.forEach((product) => {
            const d = this.model.getProductInfo(product)
            this.model.addOrderLclStg(d)
            
        })
        }
    }

    displayProductOrdered = d => {
        d = d["fields"]
        this.view.renderOrder(d["PHOTO"], d["PRODUCT_NAME"], d["PRICE"].toFixed(2), 1)        
    }

    getTotalPrice = total => {
        console.log("someone ordered", total);
    }

}