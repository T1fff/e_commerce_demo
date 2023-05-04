//*PRODUCTS MODEL
export default class productsModel{
    URLTABLE = "https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/"
    URLSORT = "?sort%5B0%5D%5Bfield%5D=PRICE&sort%5B0%5D%5Bdirection%5D="
    URLFILTER = "?filterByFormula=%7BPRODUCT_CATEGORY%7D+%3D+%"
    URLSEARCH_1 = "?filterByFormula=FIND(%22"
    URLSEARCH_2 = "%22%2C+%7BPRODUCT_NAME%7D)"
    URLTABLEPAGINATION = "https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/?offset=0&limit=24"
    PAGINATION = "?offset=0&limit="
    OPTIONS = {
        headers: {
            Authorization: "Bearer keyvVke9Qirt0HDi6"
        }
        };

    constructor() {

    }
    
    loadProductsData(URL, callback){
        if (URL) {
              fetch(URL, this.OPTIONS).then( res => res.json() ).then( d => callback(d) );
        }
       
    }

    sortBy = (URL, sortType) => {
        let urlSort = ""
        switch (sortType) {
            case "PriceHighLow":
            urlSort = urlSort.concat(URL, this.URLSORT, "asc")    
                break;

            case "PriceLowHigh":
            urlSort = urlSort.concat(URL, this.URLSORT, "desc")    
                break;

            default:
                urlSort = URL
                break;
        }
        return urlSort
    }

    filterBy = (filterType) => {
        let urlFilter = ""
        if (filterType) {
            urlFilter = urlFilter.concat(this.URLTABLE, this.URLFILTER, "22", filterType, "%22")  
          
        } 
        return urlFilter
    }

    sortFilter = (filter, sort) => {
        let d = this.filterBy(filter)

        const sorted = this.sortBy(d, sort)
        console.log(sorted);
        return sorted;
    }

    Searchby = (search) => {
        let urlSearch = ""
        urlSearch = urlSearch.concat(this.URLTABLE, this.URLSEARCH_1, search, this.URLSEARCH_2)  
        return urlSearch
    }

    pagination = records => {
        let paginationURL = ""
        console.log(paginationURL);
        paginationURL = paginationURL.concat(this.URLTABLE,this.PAGINATION, records)
        console.log(paginationURL);
        return paginationURL
    }
  
}


/**filter + sorting 
https://api.airtable.com/v0/app3vSxrliB6b3Nkb/tbljmiXZNzOmqgRdF?
filterByFormula=%7BPRODUCT_CATEGORY%7D+%3D+%22Watches%22&
sort%5B0%5D%5Bfield%5D=PRICE&sort%5B0%5D%5Bdirection%5D=desc
*/