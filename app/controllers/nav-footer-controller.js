//* NAVIGATION & FOOTER CONTROLLER

import navFooterView from "../views/nav-footer-views.js"

export default class navFooterController{
    constructor() {
        this.view = new navFooterView
        

        this.view.renderNav()
        this.view.renderFooter()
    }
}