//*NEWARRIVALS MODEL
export default class arrivalsModel{
    DATA_LINK_EARRINGS = "../../newArrivals.json"

    constructor() {
        
    }

    loadData(callback){
        fetch(this.DATA_LINK_EARRINGS).then(r => r.json()).then(d => {
            this.data = d
            callback(d)
        })
            
    }

    showBy = categoryType => {
        if (categoryType == "earrings") {
            return this.data["earrings"]
        } else if (categoryType == "watches") {
            return this.data["watches"]
        } else if (categoryType == "rings") {
            return this.data["rings"]
        }
    }
}