//*SEARCH VIEW
export default class searchView{
    DOM_SEARCH = document.querySelector(".search-input")

    constructor(handleSearch) {
        this.DOM_SEARCH.addEventListener("input", handleSearch)
    }

    get searchValue(){
        return this.DOM_SEARCH.value
    }
}


