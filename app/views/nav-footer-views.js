//* NAVIGATION & FOOTER VIEW

export default class navFooterView{
    DOM_ALL = document.querySelector("body")

    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

       
    renderNav = () => {  
        const template = `
        <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid d-flex flex-direction-column nav-container">
        <div class="logo">
          <a class="navbar-brand d-flex justify-content-center" href="../../index.html"
            ><img src="../../img/logo_ecommerce.png" alt="" class="navbar-logo"
          /></a>
        </div>
        <div class="collapse navbar-collapse pl-2" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="./public/catalogue/catalogue.html">Catalogue</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="search d-flex" >
            <div class="collapse-horizontal collapse" id="collapseWidthExample">
              <div class="card card-body">
                <input class="search-input" type="search" placeholder="Search" aria-label="Search">
              </div>
          </div>
          <button class="btn search" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Search" data-bs-custom-class="custom-tooltip" >
            <i class="fa-solid fa-magnifying-glass" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="true" aria-controls="collapseWidthExample"></i>
          </button>

          <a class="btn login-access" href="./public/login/login.html" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Login">
            <i class="fa-regular fa-circle-user"></i>
          </a>        

          </div>
          
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
        `
        this.DOM_ALL.insertAdjacentHTML("afterbegin", template)
        
    }

    renderFooter = () => {  
        const template = `
        <footer class="text-center text-lg-start">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 link-secondary">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="logo-footer">
                <img src="../../img/logo_ecommerce.png" alt="" srcset="">
              </h6>
    
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">About us</h6>
              <p>
                <a href="#!" class="text-reset">Mission</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Foundation</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">Work with us</a>
              </p>
              <p>
                <a href="#!" class="text-reset">FAQs</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Support</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3 text-secondary"></i> New York, NY
                10012, US
              </p>
              <p>
                <i class="fas fa-envelope me-3 text-secondary"></i>
                lux@jewelry.com
              </p>
              <p>
                <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89
              </p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.025)"
      >
        © 2022 Copyright:
        <p>Tiffany Mendoza for Softserve</p>
      </div>
      <!-- Copyright -->
    </footer>
        `
        this.DOM_ALL.insertAdjacentHTML("beforeend", template)
        
    }
}