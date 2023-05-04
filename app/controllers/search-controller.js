//*SEARCH CONTROLLER
import Publisher from "../publisher.js";
import searchView from "../views/search-views.js";


export default class searchController {
    constructor() {
        this.view = new searchView(this.handleSearch)
    }

    handleSearch = () => {
        const searchVal = this.view.searchValue.toUpperCase()
        Publisher.notify("SEARCH", searchVal)
    }

    
}
