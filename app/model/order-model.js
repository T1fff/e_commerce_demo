export default class orderModel {
    URLTABLE = "https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/"
    
    OPTIONS = {
        headers: {
            Authorization: "Bearer keyvVke9Qirt0HDi6"
        }
    }

    constructor() {
        
    }

    loadProductsData(URL, callback){
        if (URL && callback) {
            fetch( URL, this.OPTIONS).then( res => res.json() ).then( d => callback(d) );
        }
           
    }

    getProductInfo = idElement => {
        let urlproduct = ""
        urlproduct = urlproduct.concat(this.URLTABLE, idElement)
        return urlproduct
    }

    getOrderLclStg = () =>{
        let products;
        if(localStorage.getItem("order") === null) {
            products = [];
        } else [
            products = JSON.parse(localStorage.getItem("order"))
        ]
        return products;
    }

    addOrderLclStg = (product) =>{
        const products = this.getOrderLclStg();
        products.push(product);
        localStorage.setItem("order", JSON.stringify(products))
    }

}