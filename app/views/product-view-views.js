//*PRODUCT VIEW VIEW

export default class productViewView {
    DOM_ALL = document.querySelector("main")
    DOM_PRODUCT_VIEW = document.querySelector(".modal-dialog")
    
    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

    render = (PRODUCT_NAME, PHOTO1, PHOTO2, PHOTO3, PRODUCT_FAMILY, PRICE, DESCRIPTION, DETAILS, DETAILS2, PRODUCTID) => {  
        var insertedContent = document.querySelector(".insertedContent");
        if(insertedContent) {
            insertedContent.parentNode.removeChild(insertedContent);
        }
        const template = `
        <div class="modal-content insertedContent">
        <div class="modal-body d-flex flex-column mt-0" id = ${PRODUCTID}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <!--?ModalTitle -->
                <div class="img-text">
                <div class="title-img">
                  <h1 class="product-name pt-0">${PRODUCT_NAME}</h1>

                  <!--?ModalPhotos -->
                <div id="carouselExampleIndicators" class="carousel w-100 slide" data-bs-ride="true">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="${PHOTO1}" class="d-block w-100"alt="" srcset="">
                    </div>
                    <div class="carousel-item">
                      <img src="${PHOTO2}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="${PHOTO3}" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                </div>
                
                <div class="modal-info">
                  <!--?Modal Info -->
                  <div class="product-text p-0 m-0">
                    <p class="product-family">${PRODUCT_FAMILY}</p>
                    <div class="shipping d-flex">
                      <i class="fa-solid fa-truck-fast"></i>
                      <p class="p-0 m-0">Free shipping & return</p>
                    </div>
                  </div>
                  <!--?Quantity and size -->
                  <div class="quantity d-flex">
                    <h1 class="m-0">Quantity</h1>
                    <select class="form-select quantity-form d-flex" aria-label="Default select example">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
    
                  <div class="size d-flex">
                    <h1 class="m-0">Size</h1>
                    <select class="form-select size-form" aria-label="Default select example">
                      <option>Medium</option>
                      <option>Small</option>
                      <option>Large</option>
                      <option>Super large</option>
                    </select>
                  </div>

                  <!--?Add to cart button -->
    
                  <div class="addtoCart d-flex justify-content-center">
                    <button class="addtoCart-button d-flex justify-content-between" data-bs-dismiss="modal" aria-label="Close" data-addtocart = "addtocart">
                      <p class="m-0">$${PRICE}</p>
                      <div class="d-flex"><p class="p-0 m-0">Add to Cart</p><i class="fa-solid fa-cart-shopping"></i></div> 
                    </button>
                  </div>
                </div> 
                </div>  
                  <!--?Description -->
                  <div class="description">
                    <h1>Description & Details</h1>
                    <p>${DESCRIPTION}</p>
                    
                    <ul>
                      <li>${DETAILS}</li>
                      <li>${DETAILS2}</li>
                      
                    </ul>
                  </div>
            </div>
        </div>
        `
        this.DOM_PRODUCT_VIEW.insertAdjacentHTML("afterbegin", template)
        
    }
}