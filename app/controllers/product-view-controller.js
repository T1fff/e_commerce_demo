//*PRODUCT VIEW CONTROLLER
import productViewModel from "../model/product-view-model.js"
import productViewView from "../views/product-view-views.js"

export default class productViewController {
    constructor() {
        this.model = new productViewModel
        this.view = new productViewView
        
        
        this.view = new productViewView(this.handleProductPage)
        this.model.loadProductsData(this.handleProductPage)
    }

    handlePageView = (d) => {
        let id = d["id"]
        d = d["fields"]
        this.view.render(d["PRODUCT_NAME"], d["PHOTO"], d["PHOTO2"], d["PHOTO3"], d["PRODUCT_FAMILY"], d["PRICE"].toFixed(2), d["DESCRIPTION"], d["DETAILS"], d["DETAILS2"], id )
    }

    handleProductPage = ev => {
        let modal = ev.target.dataset.modal

        if (modal) {
            let idElement = ev.target.parentNode.parentNode.id;
            const d = this.model.getProductInfo(idElement)
           
            this.model.loadProductsData(d, this.handlePageView)
            
        }

    }

    
}