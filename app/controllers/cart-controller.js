//*CART CONTROLLER
import cartModel from "../model/cart-model.js"
import cartView from "../views/cart-views.js"
import Publisher from "../publisher.js";

export default class cartController {
    constructor() {
        this.model = new cartModel
        this.view = new cartView

        this.view = new cartView(this.makeAnOrder)
        this.view.renderCart()
        this.displayProductsInCart()
        this.view = new cartView(this.handleAddtoCart)
        this.view = new cartView(this.handledeleteFromCart)
        this.view = new cartView(this.getProductfromLclStg)
        this.model.loadProductsData(this.handleAddtoCart)
       
    }

    displayProductsInCart = () => {
        const products = this.model.getProductsLclStg()
        products.forEach((product) =>  this.model.loadProductsData(product, this.handleProductView))
        
    }

    handleProductView = (d) => {
        let id = d["id"]
        d = d["fields"]
        this.view.renderProductSelected(d["PRODUCT_NAME"], d["PHOTO"], d["PRICE"].toFixed(2), 1,id)

        this.calculateTotal()  
    }

    handleAddtoCart = ev => {
        let addtocart = ev.target.dataset.addtocart

        if (addtocart) {
            let idElement = ev.target.parentNode.parentNode.parentNode.parentNode.id;
            const d = this.model.getProductInfo(idElement)
            this.model.addProductsLclStg(d)
            this.model.loadProductsData(d, this.handleProductView)
        }

        
    }

    calculateTotal = () => {
        let total = 0
        let price = [...document.querySelectorAll(".product-cart-price")]

        for (let i = 0; i < price.length; i++) {
            let value = parseInt(price[i].innerHTML)
            total += value
        }

        this.view.renderTotal(total)
        return total
    }


    handledeleteFromCart = ev => {
        let deleteFromCart = ev.target.dataset.deletecart
        if (deleteFromCart) {
            let idElement = ev.target.parentNode.parentNode.id
            let element = ev.target.parentNode.parentNode
            this.view.deleteProductSelected(element)
            this.model.removeProductsLclStg(idElement)
             
        }

        this.calculateTotal()
    }

    infoOrder = (d) => {
        return d["fields"]
    }

    makeAnOrder = ev => {
        let checkout = ev.target.dataset.checkout
        if (checkout) {
            const gettingProducts = this.model.getProductsLclStg()
            const products = []

            gettingProducts.forEach((product) => {
                let id = product.slice(64)
                products.push(id)
                
            })
            let total = this.calculateTotal()
            console.log("orderplaced");
            Publisher.notify("ORDERPLACED", products)
            Publisher.notify("ORDER_TOTAL", total)

            this.view.delete()
        }
    }

    
}