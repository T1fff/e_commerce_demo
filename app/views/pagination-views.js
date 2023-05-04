//*PAGINATION VIEW
export default class paginationView{
    DOM_ALL = document.querySelector("main")
    DOM_PAGINATION = document.querySelector(".pagination")
    
    
    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

    delete = () => {
        let product = document.querySelectorAll(".product")
        for (let i = 0; i < product.length; i++) {
            product[i].remove();
        }

    }
   
    renderPaginationMenu = () => {  
        const template = `
      <nav aria-label="Page navigation">
        <div class="pagination m-0">
          <p class="page-link page-item" data-next = "next">SHOW MORE</p>
          
          </div>
      </nav>
        `
        this.DOM_PAGINATION.insertAdjacentHTML("afterbegin", template)
        
    }
}