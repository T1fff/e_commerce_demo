//*CART MODEL
export default class cartModel {
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

    getProductsLclStg = () =>{
        let products;
        if(localStorage.getItem("products") === null) {
            products = [];
        } else [
            products = JSON.parse(localStorage.getItem("products"))
        ]
        return products;
    }

    addProductsLclStg = (product) =>{
        const products = this.getProductsLclStg();
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products))
    }

    removeProductsLclStg = (idElement) => {
        const products = this.getProductsLclStg();

        products.forEach((product, index) => {
            let id = product.slice(64)
            if(id === idElement){
                products.splice(index, 1)
            }
        })

        localStorage.setItem("products", JSON.stringify(products))
    }


}