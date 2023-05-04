//*NEWARRIVALS CONTROLLER
import arrivalsModel from "../model/arrivals-model.js";
import arrivalsView from "../views/arrivals-views.js";

export default class arrivalsController{
    constructor() {
        this.model = new arrivalsModel()
        this.view = new arrivalsView(this.handleClick)

        this.model.loadData(this.handleClick)
    }
    
    handleClick = (ev) => {
        let showCategoryArrival = ev.target.dataset.show

        if (showCategoryArrival) {
            const d = this.model.showBy(showCategoryArrival)
            this.view.render(d)
        }

    }

}