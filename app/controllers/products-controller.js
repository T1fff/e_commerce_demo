//*PRODUCTS CONTROLLER
import productsModel from "../model/products-model.js";
import Publisher from "../publisher.js";
import productsView from "../views/products-views.js";
export default class productsController{
    constructor() {
        this.model = new productsModel
        this.model.loadProductsData(this.model.URLTABLEPAGINATION, this.handleProductData)
        this.view = new productsView(this.handleSort)
        this.view = new productsView(this.handleFilter)
        
    
        Publisher.subscribe("SEARCH", this.handleSearch)
        Publisher.subscribe("NEXTPAGE", this.handlePagination)
    }


    handleProductData = (d) => {
        for (let i = 0; i < d["records"].length; i++) {
            const photo = d["records"][i]["fields"]["PHOTO"] 
            const pName = d["records"][i]["fields"]["PRODUCT_NAME"] 
            const price = d["records"][i]["fields"]["PRICE"].toFixed(2)
            const productId = d["records"][i]["id"]
            this.view.render(photo, pName, price, productId)
        }        
    } 

    handlePageView = (d) => {
        console.log(d["fields"]);
    }
    
    handleSort = (ev) => {
        let sort = ev.target.dataset.sort

        if (sort) {
            this.view.delete()
            const d = this.model.sortBy(this.model.URLTABLE, sort);
            this.model.loadProductsData(d, this.handleProductData)
        }
    }

    handleFilter = (ev) => {
        let filter = ev.target.dataset.filter
        if (filter) {
            const d = this.model.filterBy(filter);
            this.view.delete()
            this.model.loadProductsData(d, this.handleProductData)
            let filtered = true
            
        } 
    }

    handleSearch = searchVal => {
        this.view.delete()
        const d = this.model.Searchby(searchVal);
        this.model.loadProductsData(d, this.handleProductData)
        
    }

    handlePagination = records => {
            const d = this.model.pagination(records);
            this.view.delete()
            this.model.loadProductsData(d, this.handleProductData)
        
    }

}