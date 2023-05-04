//*PAGINATION CONTROLLER

import paginationView from "../views/pagination-views.js";
import Publisher from "../publisher.js";

export default class paginationController{
    constructor() {
        this.view = new paginationView

        this.view.renderPaginationMenu()
        this.view = new paginationView(this.handlePagination)
    }

    handlePagination = (ev) => {
        const nextpage = ev.target.dataset.next
        
        let records = 24
        if (nextpage) {
            let button = ev.target
            records+=24
            Publisher.notify("NEXTPAGE", records)
            button.classList.add("invisible")
        }
        
    }
}