/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/controllers/arrivals-controller.js":
/*!************************************************!*\
  !*** ./app/controllers/arrivals-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrivalsController)\n/* harmony export */ });\n/* harmony import */ var _model_arrivals_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/arrivals-model.js */ \"./app/model/arrivals-model.js\");\n/* harmony import */ var _views_arrivals_views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/arrivals-views.js */ \"./app/views/arrivals-views.js\");\n//*NEWARRIVALS CONTROLLER\n\n\nclass arrivalsController {\n  constructor() {\n    this.model = new _model_arrivals_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _views_arrivals_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handleClick);\n    this.model.loadData(this.handleClick);\n  }\n  handleClick = ev => {\n    let showCategoryArrival = ev.target.dataset.show;\n    if (showCategoryArrival) {\n      const d = this.model.showBy(showCategoryArrival);\n      this.view.render(d);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/arrivals-controller.js?");

/***/ }),

/***/ "./app/controllers/cart-controller.js":
/*!********************************************!*\
  !*** ./app/controllers/cart-controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cartController)\n/* harmony export */ });\n/* harmony import */ var _model_cart_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/cart-model.js */ \"./app/model/cart-model.js\");\n/* harmony import */ var _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/cart-views.js */ \"./app/views/cart-views.js\");\n/* harmony import */ var _publisher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../publisher.js */ \"./app/publisher.js\");\n//*CART CONTROLLER\n\n\n\nclass cartController {\n  constructor() {\n    this.model = new _model_cart_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.view = new _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.makeAnOrder);\n    this.view.renderCart();\n    this.displayProductsInCart();\n    this.view = new _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handleAddtoCart);\n    this.view = new _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handledeleteFromCart);\n    this.view = new _views_cart_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.getProductfromLclStg);\n    this.model.loadProductsData(this.handleAddtoCart);\n  }\n  displayProductsInCart = () => {\n    const products = this.model.getProductsLclStg();\n    products.forEach(product => this.model.loadProductsData(product, this.handleProductView));\n  };\n  handleProductView = d => {\n    let id = d[\"id\"];\n    d = d[\"fields\"];\n    this.view.renderProductSelected(d[\"PRODUCT_NAME\"], d[\"PHOTO\"], d[\"PRICE\"].toFixed(2), 1, id);\n    this.calculateTotal();\n  };\n  handleAddtoCart = ev => {\n    let addtocart = ev.target.dataset.addtocart;\n    if (addtocart) {\n      let idElement = ev.target.parentNode.parentNode.parentNode.parentNode.id;\n      const d = this.model.getProductInfo(idElement);\n      this.model.addProductsLclStg(d);\n      this.model.loadProductsData(d, this.handleProductView);\n    }\n  };\n  calculateTotal = () => {\n    let total = 0;\n    let price = [...document.querySelectorAll(\".product-cart-price\")];\n    for (let i = 0; i < price.length; i++) {\n      let value = parseInt(price[i].innerHTML);\n      total += value;\n    }\n    this.view.renderTotal(total);\n    return total;\n  };\n  handledeleteFromCart = ev => {\n    let deleteFromCart = ev.target.dataset.deletecart;\n    if (deleteFromCart) {\n      let idElement = ev.target.parentNode.parentNode.id;\n      let element = ev.target.parentNode.parentNode;\n      this.view.deleteProductSelected(element);\n      this.model.removeProductsLclStg(idElement);\n    }\n    this.calculateTotal();\n  };\n  infoOrder = d => {\n    return d[\"fields\"];\n  };\n  makeAnOrder = ev => {\n    let checkout = ev.target.dataset.checkout;\n    if (checkout) {\n      const gettingProducts = this.model.getProductsLclStg();\n      const products = [];\n      gettingProducts.forEach(product => {\n        let id = product.slice(64);\n        products.push(id);\n      });\n      let total = this.calculateTotal();\n      console.log(\"orderplaced\");\n      _publisher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notify(\"ORDERPLACED\", products);\n      _publisher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].notify(\"ORDER_TOTAL\", total);\n      this.view.delete();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/cart-controller.js?");

/***/ }),

/***/ "./app/controllers/login-controller.js":
/*!*********************************************!*\
  !*** ./app/controllers/login-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginController)\n/* harmony export */ });\n/* harmony import */ var _model_login_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/login-model.js */ \"./app/model/login-model.js\");\n/* harmony import */ var _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/login-views.js */ \"./app/views/login-views.js\");\n//*LOGIN CONTROLLER \n\n\n\nclass loginController {\n  constructor() {\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.model = new _model_login_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handleLogin);\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.showSignUp);\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.signUp);\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.emailValidation);\n    this.view = new _views_login_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.shippingInformation);\n    this.handleLogin();\n    this.view.renderLogin();\n  }\n  handleLogin = async ev => {\n    let signin = await ev.target.dataset.signin;\n    if (signin) {\n      const data = this.view.getInputsValue();\n      const isValidData = this.model.checkDataLogin(data);\n      if (isValidData.total) {\n        this.view.showValid(isValidData);\n        console.log(\"valid\");\n        setTimeout(function () {\n          window.location.href = \"http://127.0.0.1:5500/public/users/user.html\";\n        }, 3000);\n      } else {\n        this.view.showInvalid(isValidData);\n      }\n    }\n  };\n  showSignUp = async ev => {\n    let signup = await ev.target.dataset.signup;\n    if (signup) {\n      this.view.deleteInsertedContent();\n      this.view.renderWelcome();\n      setTimeout(() => {\n        this.view.deleteInsertedContent();\n        this.view.renderSignUp_preregistration();\n      }, 15000);\n    }\n  };\n  signUp = async ev => {\n    let signupConfirmation = await ev.target.dataset.confirmsignup;\n    if (signupConfirmation) {\n      const data = this.view.getInputsValue();\n      const isValidData = this.model.checkDataSignUp(data);\n      if (isValidData.total) {\n        console.log(\"valid\");\n        this.view.showValid(isValidData);\n        setTimeout(() => {\n          this.view.deleteInsertedContent();\n          this.view.renderEmailValidation();\n        }, 3000);\n      } else {\n        this.view.showInvalid(isValidData);\n      }\n    }\n  };\n  emailValidation = async ev => {\n    let validateEmail = await ev.target.dataset.emailvalidated;\n    if (validateEmail) {\n      const data = this.view.getInputsValue();\n      const isValidData = this.model.checkDataConfirmationCode(data);\n      if (isValidData.total) {\n        console.log(\"valid\");\n        this.view.showValid(isValidData);\n        setTimeout(() => {\n          this.view.deleteInsertedContent();\n          this.view.renderShippingInformation();\n        }, 3000);\n      } else {\n        this.view.showInvalid(isValidData);\n      }\n    }\n  };\n  shippingInformation = async ev => {\n    let validateShippingInfo = await ev.target.dataset.completesingup;\n    if (validateShippingInfo) {\n      const data = this.view.getInputsValue();\n      console.log(data);\n      const isValidData = this.model.checkDataShippingInfo(data);\n      console.log(isValidData);\n      if (isValidData.total) {\n        console.log(\"valid\");\n        this.view.showValid(isValidData);\n      } else {\n        this.view.showInvalid(isValidData);\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/login-controller.js?");

/***/ }),

/***/ "./app/controllers/nav-footer-controller.js":
/*!**************************************************!*\
  !*** ./app/controllers/nav-footer-controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navFooterController)\n/* harmony export */ });\n/* harmony import */ var _views_nav_footer_views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nav-footer-views.js */ \"./app/views/nav-footer-views.js\");\n//* NAVIGATION & FOOTER CONTROLLER\n\n\nclass navFooterController {\n  constructor() {\n    this.view = new _views_nav_footer_views_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view.renderNav();\n    this.view.renderFooter();\n  }\n}\n\n//# sourceURL=webpack:///./app/controllers/nav-footer-controller.js?");

/***/ }),

/***/ "./app/controllers/order-controller.js":
/*!*********************************************!*\
  !*** ./app/controllers/order-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ orderController)\n/* harmony export */ });\n/* harmony import */ var _views_order_views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/order-views.js */ \"./app/views/order-views.js\");\n/* harmony import */ var _publisher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../publisher.js */ \"./app/publisher.js\");\n/* harmony import */ var _model_order_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order-model.js */ \"./app/model/order-model.js\");\n//*ORDER CONTROLLER\n\n\n\nclass orderController {\n  constructor() {\n    this.view = new _views_order_views_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.model = new _model_order_model_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    _publisher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(\"ORDERPLACED\", this.notifyOrdertoAdmin);\n    _publisher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(\"ORDER_TOTAL\", this.getTotalPrice);\n    this.displayProductsOrdered();\n  }\n  displayProductsOrdered = () => {\n    const products = this.model.getOrderLclStg();\n    products.forEach(product => this.model.loadProductsData(product, this.displayProductOrdered));\n  };\n  notifyOrdertoAdmin = async products => {\n    if (products) {\n      products.forEach(product => {\n        const d = this.model.getProductInfo(product);\n        this.model.addOrderLclStg(d);\n      });\n    }\n  };\n  displayProductOrdered = d => {\n    d = d[\"fields\"];\n    this.view.renderOrder(d[\"PHOTO\"], d[\"PRODUCT_NAME\"], d[\"PRICE\"].toFixed(2), 1);\n  };\n  getTotalPrice = total => {\n    console.log(\"someone ordered\", total);\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/order-controller.js?");

/***/ }),

/***/ "./app/controllers/pagination-controller.js":
/*!**************************************************!*\
  !*** ./app/controllers/pagination-controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ paginationController)\n/* harmony export */ });\n/* harmony import */ var _views_pagination_views_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pagination-views.js */ \"./app/views/pagination-views.js\");\n/* harmony import */ var _publisher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../publisher.js */ \"./app/publisher.js\");\n//*PAGINATION CONTROLLER\n\n\n\nclass paginationController {\n  constructor() {\n    this.view = new _views_pagination_views_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view.renderPaginationMenu();\n    this.view = new _views_pagination_views_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.handlePagination);\n  }\n  handlePagination = ev => {\n    const nextpage = ev.target.dataset.next;\n    let records = 24;\n    if (nextpage) {\n      let button = ev.target;\n      records += 24;\n      _publisher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notify(\"NEXTPAGE\", records);\n      button.classList.add(\"invisible\");\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/pagination-controller.js?");

/***/ }),

/***/ "./app/controllers/product-view-controller.js":
/*!****************************************************!*\
  !*** ./app/controllers/product-view-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productViewController)\n/* harmony export */ });\n/* harmony import */ var _model_product_view_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/product-view-model.js */ \"./app/model/product-view-model.js\");\n/* harmony import */ var _views_product_view_views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/product-view-views.js */ \"./app/views/product-view-views.js\");\n//*PRODUCT VIEW CONTROLLER\n\n\nclass productViewController {\n  constructor() {\n    this.model = new _model_product_view_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _views_product_view_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.view = new _views_product_view_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handleProductPage);\n    this.model.loadProductsData(this.handleProductPage);\n  }\n  handlePageView = d => {\n    let id = d[\"id\"];\n    d = d[\"fields\"];\n    this.view.render(d[\"PRODUCT_NAME\"], d[\"PHOTO\"], d[\"PHOTO2\"], d[\"PHOTO3\"], d[\"PRODUCT_FAMILY\"], d[\"PRICE\"].toFixed(2), d[\"DESCRIPTION\"], d[\"DETAILS\"], d[\"DETAILS2\"], id);\n  };\n  handleProductPage = ev => {\n    let modal = ev.target.dataset.modal;\n    if (modal) {\n      let idElement = ev.target.parentNode.parentNode.id;\n      const d = this.model.getProductInfo(idElement);\n      this.model.loadProductsData(d, this.handlePageView);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/product-view-controller.js?");

/***/ }),

/***/ "./app/controllers/products-controller.js":
/*!************************************************!*\
  !*** ./app/controllers/products-controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productsController)\n/* harmony export */ });\n/* harmony import */ var _model_products_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/products-model.js */ \"./app/model/products-model.js\");\n/* harmony import */ var _publisher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../publisher.js */ \"./app/publisher.js\");\n/* harmony import */ var _views_products_views_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/products-views.js */ \"./app/views/products-views.js\");\n//*PRODUCTS CONTROLLER\n\n\n\nclass productsController {\n  constructor() {\n    this.model = new _model_products_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.model.loadProductsData(this.model.URLTABLEPAGINATION, this.handleProductData);\n    this.view = new _views_products_views_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.handleSort);\n    this.view = new _views_products_views_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.handleFilter);\n    _publisher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(\"SEARCH\", this.handleSearch);\n    _publisher_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(\"NEXTPAGE\", this.handlePagination);\n  }\n  handleProductData = d => {\n    for (let i = 0; i < d[\"records\"].length; i++) {\n      const photo = d[\"records\"][i][\"fields\"][\"PHOTO\"];\n      const pName = d[\"records\"][i][\"fields\"][\"PRODUCT_NAME\"];\n      const price = d[\"records\"][i][\"fields\"][\"PRICE\"].toFixed(2);\n      const productId = d[\"records\"][i][\"id\"];\n      this.view.render(photo, pName, price, productId);\n    }\n  };\n  handlePageView = d => {\n    console.log(d[\"fields\"]);\n  };\n  handleSort = ev => {\n    let sort = ev.target.dataset.sort;\n    if (sort) {\n      this.view.delete();\n      const d = this.model.sortBy(this.model.URLTABLE, sort);\n      this.model.loadProductsData(d, this.handleProductData);\n    }\n  };\n  handleFilter = ev => {\n    let filter = ev.target.dataset.filter;\n    if (filter) {\n      const d = this.model.filterBy(filter);\n      this.view.delete();\n      this.model.loadProductsData(d, this.handleProductData);\n      let filtered = true;\n    }\n  };\n  handleSearch = searchVal => {\n    this.view.delete();\n    const d = this.model.Searchby(searchVal);\n    this.model.loadProductsData(d, this.handleProductData);\n  };\n  handlePagination = records => {\n    const d = this.model.pagination(records);\n    this.view.delete();\n    this.model.loadProductsData(d, this.handleProductData);\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/products-controller.js?");

/***/ }),

/***/ "./app/controllers/search-controller.js":
/*!**********************************************!*\
  !*** ./app/controllers/search-controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchController)\n/* harmony export */ });\n/* harmony import */ var _publisher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../publisher.js */ \"./app/publisher.js\");\n/* harmony import */ var _views_search_views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/search-views.js */ \"./app/views/search-views.js\");\n//*SEARCH CONTROLLER\n\n\nclass searchController {\n  constructor() {\n    this.view = new _views_search_views_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.handleSearch);\n  }\n  handleSearch = () => {\n    const searchVal = this.view.searchValue.toUpperCase();\n    _publisher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify(\"SEARCH\", searchVal);\n  };\n}\n\n//# sourceURL=webpack:///./app/controllers/search-controller.js?");

/***/ }),

/***/ "./app/model/arrivals-model.js":
/*!*************************************!*\
  !*** ./app/model/arrivals-model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrivalsModel)\n/* harmony export */ });\n//*NEWARRIVALS MODEL\nclass arrivalsModel {\n  DATA_LINK_EARRINGS = \"../../newArrivals.json\";\n  constructor() {}\n  loadData(callback) {\n    fetch(this.DATA_LINK_EARRINGS).then(r => r.json()).then(d => {\n      this.data = d;\n      callback(d);\n    });\n  }\n  showBy = categoryType => {\n    if (categoryType == \"earrings\") {\n      return this.data[\"earrings\"];\n    } else if (categoryType == \"watches\") {\n      return this.data[\"watches\"];\n    } else if (categoryType == \"rings\") {\n      return this.data[\"rings\"];\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/model/arrivals-model.js?");

/***/ }),

/***/ "./app/model/cart-model.js":
/*!*********************************!*\
  !*** ./app/model/cart-model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cartModel)\n/* harmony export */ });\n//*CART MODEL\nclass cartModel {\n  URLTABLE = \"https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/\";\n  OPTIONS = {\n    headers: {\n      Authorization: \"Bearer keyvVke9Qirt0HDi6\"\n    }\n  };\n  constructor() {}\n  loadProductsData(URL, callback) {\n    if (URL && callback) {\n      fetch(URL, this.OPTIONS).then(res => res.json()).then(d => callback(d));\n    }\n  }\n  getProductInfo = idElement => {\n    let urlproduct = \"\";\n    urlproduct = urlproduct.concat(this.URLTABLE, idElement);\n    return urlproduct;\n  };\n  getProductsLclStg = () => {\n    let products;\n    if (localStorage.getItem(\"products\") === null) {\n      products = [];\n    } else [products = JSON.parse(localStorage.getItem(\"products\"))];\n    return products;\n  };\n  addProductsLclStg = product => {\n    const products = this.getProductsLclStg();\n    products.push(product);\n    localStorage.setItem(\"products\", JSON.stringify(products));\n  };\n  removeProductsLclStg = idElement => {\n    const products = this.getProductsLclStg();\n    products.forEach((product, index) => {\n      let id = product.slice(64);\n      if (id === idElement) {\n        products.splice(index, 1);\n      }\n    });\n    localStorage.setItem(\"products\", JSON.stringify(products));\n  };\n}\n\n//# sourceURL=webpack:///./app/model/cart-model.js?");

/***/ }),

/***/ "./app/model/login-model.js":
/*!**********************************!*\
  !*** ./app/model/login-model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginModel)\n/* harmony export */ });\n//* LOGIN MODEL\n\nclass loginModel {\n  regExpEmail = /[\\w]+@{1}[\\w]+\\.[a-z]{2,3}/;\n  regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\\d$@$!%*?&#.$($)$-$_]{8,15}$/;\n  regExpName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\\s]*)+$/;\n  regExpConfirmationCode = /^[\\d]{6}$/;\n  regExpPhone = /^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$/;\n  regExpAddress = /^[#.0-9a-zA-Z\\s,-]+$/;\n  checkEmail = email => {\n    return this.regExpEmail.test(email);\n  };\n  checkPassword = password => {\n    return this.regExpPassword.test(password);\n  };\n  checkName = name => {\n    return this.regExpName.test(name);\n  };\n  checkConfirmationCode = code => {\n    return this.regExpConfirmationCode.test(code);\n  };\n  checkPhoneNumber = phone => {\n    console.log(phone);\n    return this.regExpPhone.test(phone);\n  };\n  checkAddress = address => {\n    console.log(address);\n    return this.regExpAddress.test(address);\n  };\n  checkDataLogin = data => {\n    let email = [data[0]];\n    let password = [data[1]];\n    const ispassword = this.checkPassword(password);\n    const isemail = this.checkEmail(email);\n    return {\n      total: ispassword && isemail,\n      inputs: [{\n        name: 'email',\n        value: isemail\n      }, {\n        name: 'password',\n        value: ispassword\n      }]\n    };\n  };\n  checkDataSignUp = data => {\n    let name = [data[0]];\n    let email = [data[1]];\n    const isname = this.checkName(name);\n    const isemail = this.checkEmail(email);\n    return {\n      total: isname && isemail,\n      inputs: [{\n        name: 'name',\n        value: isname\n      }, {\n        name: 'email',\n        value: isemail\n      }]\n    };\n  };\n  checkDataConfirmationCode = data => {\n    let code = [data[0]];\n    const iscode = this.checkConfirmationCode(code);\n    return {\n      total: iscode,\n      inputs: [{\n        name: 'code',\n        value: iscode\n      }]\n    };\n  };\n  checkDataShippingInfo = data => {\n    let phone = [data[0]];\n    let address = [data[1]];\n    const isaddress = this.checkAddress(address);\n    const isphone = this.checkPhoneNumber(phone);\n    return {\n      total: isphone && isaddress,\n      inputs: [{\n        name: 'phone',\n        value: isphone\n      }, {\n        name: 'address',\n        value: isaddress\n      }]\n    };\n  };\n}\n\n//# sourceURL=webpack:///./app/model/login-model.js?");

/***/ }),

/***/ "./app/model/order-model.js":
/*!**********************************!*\
  !*** ./app/model/order-model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ orderModel)\n/* harmony export */ });\nclass orderModel {\n  URLTABLE = \"https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/\";\n  OPTIONS = {\n    headers: {\n      Authorization: \"Bearer keyvVke9Qirt0HDi6\"\n    }\n  };\n  constructor() {}\n  loadProductsData(URL, callback) {\n    if (URL && callback) {\n      fetch(URL, this.OPTIONS).then(res => res.json()).then(d => callback(d));\n    }\n  }\n  getProductInfo = idElement => {\n    let urlproduct = \"\";\n    urlproduct = urlproduct.concat(this.URLTABLE, idElement);\n    return urlproduct;\n  };\n  getOrderLclStg = () => {\n    let products;\n    if (localStorage.getItem(\"order\") === null) {\n      products = [];\n    } else [products = JSON.parse(localStorage.getItem(\"order\"))];\n    return products;\n  };\n  addOrderLclStg = product => {\n    const products = this.getOrderLclStg();\n    products.push(product);\n    localStorage.setItem(\"order\", JSON.stringify(products));\n  };\n}\n\n//# sourceURL=webpack:///./app/model/order-model.js?");

/***/ }),

/***/ "./app/model/product-view-model.js":
/*!*****************************************!*\
  !*** ./app/model/product-view-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productViewModel)\n/* harmony export */ });\n//*PRODUCT VIEW MODEL\n\nclass productViewModel {\n  URLTABLE = \"https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/\";\n  OPTIONS = {\n    headers: {\n      Authorization: \"Bearer keyvVke9Qirt0HDi6\"\n    }\n  };\n  constructor() {}\n  loadProductsData(URL, callback) {\n    if (URL && callback) {\n      fetch(URL, this.OPTIONS).then(res => res.json()).then(d => callback(d));\n    }\n  }\n  getProductInfo = idElement => {\n    let urlproduct = \"\";\n    urlproduct = urlproduct.concat(this.URLTABLE, idElement);\n    return urlproduct;\n  };\n}\n\n//# sourceURL=webpack:///./app/model/product-view-model.js?");

/***/ }),

/***/ "./app/model/products-model.js":
/*!*************************************!*\
  !*** ./app/model/products-model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productsModel)\n/* harmony export */ });\n//*PRODUCTS MODEL\nclass productsModel {\n  URLTABLE = \"https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/\";\n  URLSORT = \"?sort%5B0%5D%5Bfield%5D=PRICE&sort%5B0%5D%5Bdirection%5D=\";\n  URLFILTER = \"?filterByFormula=%7BPRODUCT_CATEGORY%7D+%3D+%\";\n  URLSEARCH_1 = \"?filterByFormula=FIND(%22\";\n  URLSEARCH_2 = \"%22%2C+%7BPRODUCT_NAME%7D)\";\n  URLTABLEPAGINATION = \"https://api.airtable.com/v0/app3vSxrliB6b3Nkb/PRODUCT_INVENTORY/?offset=0&limit=24\";\n  PAGINATION = \"?offset=0&limit=\";\n  OPTIONS = {\n    headers: {\n      Authorization: \"Bearer keyvVke9Qirt0HDi6\"\n    }\n  };\n  constructor() {}\n  loadProductsData(URL, callback) {\n    if (URL) {\n      fetch(URL, this.OPTIONS).then(res => res.json()).then(d => callback(d));\n    }\n  }\n  sortBy = (URL, sortType) => {\n    let urlSort = \"\";\n    switch (sortType) {\n      case \"PriceHighLow\":\n        urlSort = urlSort.concat(URL, this.URLSORT, \"asc\");\n        break;\n      case \"PriceLowHigh\":\n        urlSort = urlSort.concat(URL, this.URLSORT, \"desc\");\n        break;\n      default:\n        urlSort = URL;\n        break;\n    }\n    return urlSort;\n  };\n  filterBy = filterType => {\n    let urlFilter = \"\";\n    if (filterType) {\n      urlFilter = urlFilter.concat(this.URLTABLE, this.URLFILTER, \"22\", filterType, \"%22\");\n    }\n    return urlFilter;\n  };\n  sortFilter = (filter, sort) => {\n    let d = this.filterBy(filter);\n    const sorted = this.sortBy(d, sort);\n    console.log(sorted);\n    return sorted;\n  };\n  Searchby = search => {\n    let urlSearch = \"\";\n    urlSearch = urlSearch.concat(this.URLTABLE, this.URLSEARCH_1, search, this.URLSEARCH_2);\n    return urlSearch;\n  };\n  pagination = records => {\n    let paginationURL = \"\";\n    console.log(paginationURL);\n    paginationURL = paginationURL.concat(this.URLTABLE, this.PAGINATION, records);\n    console.log(paginationURL);\n    return paginationURL;\n  };\n}\n\n/**filter + sorting \r\nhttps://api.airtable.com/v0/app3vSxrliB6b3Nkb/tbljmiXZNzOmqgRdF?\r\nfilterByFormula=%7BPRODUCT_CATEGORY%7D+%3D+%22Watches%22&\r\nsort%5B0%5D%5Bfield%5D=PRICE&sort%5B0%5D%5Bdirection%5D=desc\r\n*/\n\n//# sourceURL=webpack:///./app/model/products-model.js?");

/***/ }),

/***/ "./app/publisher.js":
/*!**************************!*\
  !*** ./app/publisher.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Publisher)\n/* harmony export */ });\nclass Publisher {\n  static #listeners = {};\n  static #isEvent = event => {\n    if (!Publisher.#listeners[event]) {\n      Publisher.#listeners[event] = [];\n    }\n  };\n  static subscribe = (event, callback) => {\n    Publisher.#isEvent(event);\n    Publisher.#listeners[event].push(callback);\n  };\n  static unsubscribe = () => {};\n  static notify = (event, data) => {\n    Publisher.#isEvent(event);\n    Publisher.#listeners[event].forEach(callback => callback(data));\n  };\n}\n\n//# sourceURL=webpack:///./app/publisher.js?");

/***/ }),

/***/ "./app/views/arrivals-views.js":
/*!*************************************!*\
  !*** ./app/views/arrivals-views.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrivalsView)\n/* harmony export */ });\n//*NEWARRIVALS VIEW\nclass arrivalsView {\n  DOM_CONTAINER = document.querySelector(\"main\");\n  DOM_NEW_ARRIVALS = document.querySelector(\".newArrivals\");\n  constructor(callback) {\n    this.DOM_CONTAINER.addEventListener(\"click\", callback);\n  }\n  render = d => {\n    var insertedContent = document.querySelector(\".insertedContent\");\n    if (insertedContent) {\n      insertedContent.parentNode.removeChild(insertedContent);\n    }\n    const template = `\n        <div class=\"earrings jewelry insertedContent\">\n        ${d.map(this.renderArrival).join(\"\")} \n        </div>\n        `;\n    this.DOM_NEW_ARRIVALS.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  renderArrival = ({\n    image,\n    productName,\n    button\n  }, i) => {\n    return `\n        <div class=\"earrings-product jewelry-p p-3 py-5 d-flex flex-column justify-content-center my-4\">\n            <img src=\"${image}\" alt=\"\" class=\"product-image mb-3\"/>\n            <p class=\"product-name text-center text-wrap\">${productName}</p>\n            <button class=\"button-prod text-center w-25\">${button}</button>\n        </div>\n        `;\n  };\n}\n\n//# sourceURL=webpack:///./app/views/arrivals-views.js?");

/***/ }),

/***/ "./app/views/cart-views.js":
/*!*********************************!*\
  !*** ./app/views/cart-views.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cartView)\n/* harmony export */ });\n//*CART VIEW\nclass cartView {\n  DOM_ALL = document.querySelector(\"main\");\n  DOM_PRODUCT_SELECTED = document.querySelector(\".cart-content\");\n  DOM_NAV = document.querySelector(\".navbar-collapse\");\n  DOM_CHECKOUT_TOTAL = document.querySelector(\".button-checkout-div\");\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  delete = () => {\n    let product = document.querySelectorAll(\".product-cart\");\n    for (let i = 0; i < product.length; i++) {\n      product[i].remove();\n    }\n  };\n  deleteProductSelected = element => {\n    element.remove();\n  };\n  renderCart = () => {\n    const template = `\n      <div class = \"cart\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasExample\" aria-controls=\"offcanvasExample\">\n            <button class=\"btn cart\" type=\"button\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" data-bs-title=\"Cart\" data-bs-custom-class=\"custom-tooltip\" >\n          <i class=\"fa-solid fa-cart-shopping\"></i>\n        </button>\n          </div>\n      `;\n    this.DOM_NAV.insertAdjacentHTML(\"beforeend\", template);\n  };\n  renderTotal = TOTAL => {\n    if (this.DOM_CHECKOUT_TOTAL) {\n      var insertedContent = document.querySelector(\".insertedContent\");\n      if (insertedContent) {\n        insertedContent.parentNode.removeChild(insertedContent);\n      }\n      const template = `\n            <button class=\"checkout d-flex justify-content-between insertedContent\" data-checkout = \"checkout\">\n              <p class=\"m-0 p-0\">Proceed to Checkout</p>\n              <p class=\"total m-0 p-0\">TOTAL: $${TOTAL}</p>\n            </button>\n        \n        `;\n      this.DOM_CHECKOUT_TOTAL.insertAdjacentHTML(\"beforeend\", template);\n    }\n  };\n  renderProductSelected = (PRODUCT_NAME, PHOTO, PRICE, QUANTITY, PRODUCTID) => {\n    if (this.DOM_PRODUCT_SELECTED) {\n      const template = `\n        <div class=\"product-cart d-flex justify-content-between\" id = ${PRODUCTID}>\n              <div class=\"img\"><img src=\"${PHOTO}\" alt=\"\" srcset=\"\"></div>\n              <div class=\"text d-flex flex-column justify-content-between\">\n                <div>\n                  <h1 class=\"product-cart-title\">${PRODUCT_NAME}</h1>\n                  <h5 class=\"product-cart-price\">${PRICE}</h5>\n                  <h5 class=\"product-cart-quantity\">QUANTITY: ${QUANTITY}</h1>\n                </div>\n                <button class=\"deleteFromCart\" data-deletecart = \"deletecart\" type = \"button\"><i class=\"fa-regular fa-trash-can\"></i></button>\n              </div>\n            </div>\n        `;\n      this.DOM_PRODUCT_SELECTED.insertAdjacentHTML(\"afterbegin\", template);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/views/cart-views.js?");

/***/ }),

/***/ "./app/views/login-views.js":
/*!**********************************!*\
  !*** ./app/views/login-views.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loginView)\n/* harmony export */ });\n//*LOGIN VIEW\n\nclass loginView {\n  DOM_ALL = document.querySelector(\"body\");\n  DOM_LOGIN = document.querySelector(\".login\");\n  co;\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  getInputsValue = () => {\n    let DOM_INPUT = [document.querySelectorAll(\".form-control\")];\n    return DOM_INPUT.reduce((acc, el) => {\n      acc = [];\n      for (let i = 0; i < el.length; i++) {\n        acc.push(el[i].value);\n      }\n      return acc;\n    }, {});\n  };\n  showValid = ({\n    inputs\n  }) => {\n    let DOM_MODAL_INPUTS = [...this.DOM_LOGIN.querySelectorAll('.form-control')];\n    inputs.forEach(({\n      name,\n      value\n    }) => {\n      if (value) {\n        const element = DOM_MODAL_INPUTS.find(el => {\n          return el.classList.contains(name);\n        });\n        element.classList.add('is-valid');\n        setTimeout(() => {\n          element.classList.remove('is-valid');\n        }, 3000);\n      }\n    });\n  };\n  showInvalid = ({\n    inputs\n  }) => {\n    let DOM_MODAL_INPUTS = [...this.DOM_LOGIN.querySelectorAll('.form-control')];\n    inputs.forEach(({\n      name,\n      value\n    }) => {\n      if (!value) {\n        const element = DOM_MODAL_INPUTS.find(el => {\n          return el.classList.contains(name);\n        });\n        element.classList.add('is-invalid');\n        setTimeout(() => {\n          element.classList.remove('is-invalid');\n        }, 3000);\n      }\n    });\n  };\n  deleteInsertedContent = () => {\n    var insertedContent = document.querySelector(\".insertedContent\");\n    if (insertedContent) {\n      insertedContent.parentNode.removeChild(insertedContent);\n    }\n  };\n  renderLogin = () => {\n    const template = `\n        <div class = \"log insertedContent\">\n        <h1 class=\"title text-center\">LOGIN</h1>\n        <div class=\"mb-3 row\">\n          <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group d-flex\">\n              <span class=\"input-group-text\" id=\"addon-wrapping\">@</span>\n              <input type=\"text\" class=\"form-control login-form-email email\" placeholder=\"Email\" aria-label=\"Email\" aria-describedby=\"addon-wrapping\" data-signinform = \"signinform\">\n              <div class=\"invalid-feedback\">\n                Please enter a valid email.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mb-3 row\">\n          <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <div class=\"input-group d-flex\">\n              <span class=\"input-group-text\" id=\"addon-wrapping\">🔒</span>\n              <input type=\"password\" class=\"form-control login-form-password password\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"addon-wrapping\" id=\"inputPassword\" data-signinform = \"signinform\">\n              <div class=\"invalid-feedback\">\n                <p>Please enter a valid password.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex flex-column justify-content-center buttons\">\n          <div>\n            <button class=\"signIn my-4\" type=\"submit\" data-signin = \"signin\">Sign in</button> \n          </div>\n          <div>\n            <button class=\"signUp\" data-signup = \"signup\" >Sign up</button> \n          </div>\n             \n          \n        </div>\n        </div>\n        `;\n    this.DOM_LOGIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  renderWelcome = () => {\n    const template = `\n        <div class=\"welcome insertedContent\">\n          <h1>Welcome to <span>LUX</i></span></h1>\n          <p class=\"m-0 mt-4\">We appreciate you chose us for your next purchase.</p>\n          <p>Now, we are going to set up your account to enhance and personalize your experience with us.</p>\n        </div>   \n        `;\n    this.DOM_LOGIN.insertAdjacentHTML(\"afterbegin\", template);\n    return template;\n  };\n  renderSignUp_preregistration = () => {\n    const template = `\n        <div class = \"preregistration insertedContent\">\n        <h1 class=\"title text-center\">SIGN UP</h1>\n          <div class=\"mb-3 row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group d-flex\">\n                <span class=\"input-group-text\" id=\"addon-wrapping\">👤</span>\n                <input type=\"text\" class=\"form-control name\" placeholder=\"Name\" aria-label=\"Name\" aria-describedby=\"addon-wrapping\" data-signupform = \"signupform\">\n                <div class=\"invalid-feedback\">\n                  Please enter a valid name. Use \n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3 row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group d-flex\">\n                <span class=\"input-group-text\" id=\"addon-wrapping\">@</span>\n                <input type=\"text\" class=\"form-control email\" placeholder=\"Email\" aria-label=\"Username\" aria-describedby=\"addon-wrapping\" data-signupform = \"signupform\">\n                <div class=\"invalid-feedback\">\n                  Please enter a valid email.\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"d-flex flex-column justify-content-center buttons\">\n            <div>\n              <button class=\"confirmation-signUP\" data-confirmsignup = \"confirmSignUp\" >Sign up</button> \n            </div>\n\n            <div class=\"d-flex flex-column justify-content-center buttons\">\n            <div class = \"mistake-div mt-3 d-flex justify-content-center\">\n              <a class=\"mistake text-center\" href=\"/public/login/login.html\">Do you have an account? Click here to sign in</a> \n            </div>\n            \n          </div>\n          </div>\n\n        `;\n    this.DOM_LOGIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  renderEmailValidation = () => {\n    const template = `\n        <div class=\"validating-code insertedContent d-flex flex-column justify-content-center\">\n        <h6 class=\"m-0 mb-4 text-center\">Enter the confirmation code that was sent to your email</h6>\n        <div class=\"d-flex\">\n          <input type=\"text\" class=\"form-control code\" placeholder=\"Code\" aria-label=\"Name\" >\n          <div class=\"invalid-feedback ms-3\">\n                Please enter a valid code.\n          </div>\n          <button class=\"NEXT\" data-emailvalidated = \"emailvalidated\"><i class=\"fa-solid fa-arrow-right\" data-emailvalidated = \"emailvalidated\"></i></button>\n          \n        </div>\n        \n        `;\n    this.DOM_LOGIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  renderShippingInformation = () => {\n    const template = `\n        <div class=\"shipping-info insertedContent\">\n        <h1 class=\"title text-center\">Shipping Information</h1>\n          <div class=\"my-3 row\">\n            <label for=\"name\" class=\"col-sm-2 col-form-label\">Number</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group d-flex \">\n                <span class=\"input-group-text\" id=\"addon-wrapping\">📞</span>\n                <input type=\"text\" class=\"form-control phone\" placeholder=\"Phone Number\" aria-label=\"Name\" aria-describedby=\"addon-wrapping\">\n                <div class=\"invalid-feedback ms-3\">\n                  Please enter a valid phone.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3 row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Address</label>\n            <div class=\"col-sm-10\">\n              <div class=\"input-group d-flex\">\n                <span class=\"input-group-text\" id=\"addon-wrapping\">📍</span>\n                <input type=\"text\" class=\"form-control address\" placeholder=\"Address\" aria-label=\"Username\" aria-describedby=\"addon-wrapping\">\n                <div class=\"invalid-feedback ms-3\">\n                  Please enter a valid address.\n                </div>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"d-flex flex-column justify-content-center buttons\">\n            <div>\n              <button class=\"confirmation-button complete\" data-completesingup = \"completesingup\">Complete</button> \n            </div>\n          </div>\n          </div>\n        `;\n    this.DOM_LOGIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n}\n\n//# sourceURL=webpack:///./app/views/login-views.js?");

/***/ }),

/***/ "./app/views/nav-footer-views.js":
/*!***************************************!*\
  !*** ./app/views/nav-footer-views.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navFooterView)\n/* harmony export */ });\n//* NAVIGATION & FOOTER VIEW\n\nclass navFooterView {\n  DOM_ALL = document.querySelector(\"body\");\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  renderNav = () => {\n    const template = `\n        <nav class=\"navbar navbar-expand-lg navbar-dark\">\n      <div class=\"container-fluid d-flex flex-direction-column nav-container\">\n        <div class=\"logo\">\n          <a class=\"navbar-brand d-flex justify-content-center\" href=\"../../index.html\"\n            ><img src=\"../../img/logo_ecommerce.png\" alt=\"\" class=\"navbar-logo\"\n          /></a>\n        </div>\n        <div class=\"collapse navbar-collapse pl-2\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"./public/catalogue/catalogue.html\">Catalogue</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a\n                class=\"nav-link dropdown-toggle\"\n                href=\"#\"\n                role=\"button\"\n                data-bs-toggle=\"dropdown\"\n                aria-expanded=\"false\"\n              >\n                Dropdown\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                <li><hr class=\"dropdown-divider\" /></li>\n                <li>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a\n                class=\"nav-link dropdown-toggle\"\n                href=\"#\"\n                role=\"button\"\n                data-bs-toggle=\"dropdown\"\n                aria-expanded=\"false\"\n              >\n                Dropdown\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n                <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n                <li><hr class=\"dropdown-divider\" /></li>\n                <li>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <div class=\"search d-flex\" >\n            <div class=\"collapse-horizontal collapse\" id=\"collapseWidthExample\">\n              <div class=\"card card-body\">\n                <input class=\"search-input\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n              </div>\n          </div>\n          <button class=\"btn search\" type=\"button\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" data-bs-title=\"Search\" data-bs-custom-class=\"custom-tooltip\" >\n            <i class=\"fa-solid fa-magnifying-glass\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseWidthExample\" aria-expanded=\"true\" aria-controls=\"collapseWidthExample\"></i>\n          </button>\n\n          <a class=\"btn login-access\" href=\"./public/login/login.html\" data-bs-toggle=\"tooltip\" data-bs-placement=\"bottom\" data-bs-custom-class=\"custom-tooltip\" data-bs-title=\"Login\">\n            <i class=\"fa-regular fa-circle-user\"></i>\n          </a>        \n\n          </div>\n          \n        </div>\n        <button\n          class=\"navbar-toggler\"\n          type=\"button\"\n          data-bs-toggle=\"collapse\"\n          data-bs-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </div>\n    </nav>\n        `;\n    this.DOM_ALL.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  renderFooter = () => {\n    const template = `\n        <footer class=\"text-center text-lg-start\">\n      <!-- Section: Social media -->\n      <section\n        class=\"d-flex justify-content-center justify-content-lg-between p-4 border-bottom\"\n      >\n        <!-- Left -->\n        <div class=\"me-5 d-none d-lg-block\">\n          <span>Get connected with us on social networks:</span>\n        </div>\n        <!-- Left -->\n\n        <!-- Right -->\n        <div>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </a>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-twitter\"></i>\n          </a>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-google\"></i>\n          </a>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-instagram\"></i>\n          </a>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-linkedin\"></i>\n          </a>\n          <a href=\"\" class=\"me-4 link-secondary\">\n            <i class=\"fab fa-github\"></i>\n          </a>\n        </div>\n        <!-- Right -->\n      </section>\n      <!-- Section: Social media -->\n\n      <!-- Section: Links  -->\n      <section class=\"\">\n        <div class=\"container text-center text-md-start mt-5\">\n          <!-- Grid row -->\n          <div class=\"row mt-3\">\n            <!-- Grid column -->\n            <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\n              <!-- Content -->\n              <h6 class=\"logo-footer\">\n                <img src=\"../../img/logo_ecommerce.png\" alt=\"\" srcset=\"\">\n              </h6>\n    \n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n              <!-- Links -->\n              <h6 class=\"text-uppercase fw-bold mb-4\">About us</h6>\n              <p>\n                <a href=\"#!\" class=\"text-reset\">Mission</a>\n              </p>\n              <p>\n                <a href=\"#!\" class=\"text-reset\">Foundation</a>\n              </p>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n              <!-- Links -->\n              <h6 class=\"text-uppercase fw-bold mb-4\">Useful links</h6>\n              <p>\n                <a href=\"#!\" class=\"text-reset\">Work with us</a>\n              </p>\n              <p>\n                <a href=\"#!\" class=\"text-reset\">FAQs</a>\n              </p>\n              <p>\n                <a href=\"#!\" class=\"text-reset\">Support</a>\n              </p>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n              <!-- Links -->\n              <h6 class=\"text-uppercase fw-bold mb-4\">Contact</h6>\n              <p>\n                <i class=\"fas fa-home me-3 text-secondary\"></i> New York, NY\n                10012, US\n              </p>\n              <p>\n                <i class=\"fas fa-envelope me-3 text-secondary\"></i>\n                lux@jewelry.com\n              </p>\n              <p>\n                <i class=\"fas fa-phone me-3 text-secondary\"></i> + 01 234 567 88\n              </p>\n              <p>\n                <i class=\"fas fa-print me-3 text-secondary\"></i> + 01 234 567 89\n              </p>\n            </div>\n            <!-- Grid column -->\n          </div>\n          <!-- Grid row -->\n        </div>\n      </section>\n      <!-- Section: Links  -->\n\n      <!-- Copyright -->\n      <div\n        class=\"text-center p-4\"\n        style=\"background-color: rgba(0, 0, 0, 0.025)\"\n      >\n        © 2022 Copyright:\n        <p>Tiffany Mendoza for Softserve</p>\n      </div>\n      <!-- Copyright -->\n    </footer>\n        `;\n    this.DOM_ALL.insertAdjacentHTML(\"beforeend\", template);\n  };\n}\n\n//# sourceURL=webpack:///./app/views/nav-footer-views.js?");

/***/ }),

/***/ "./app/views/order-views.js":
/*!**********************************!*\
  !*** ./app/views/order-views.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ orderView)\n/* harmony export */ });\n//*ORDER VIEW\nclass orderView {\n  DOM_ORDER = document.querySelector(\".content\");\n  constructor() {}\n  renderOrder = (PHOTO, TITLE, PRICE, QUANTITY, i) => {\n    if (this.DOM_ORDER) {\n      const template = `\n        <div class=\"order mb-4 d-flex flex-column justify-content-between\">\n        <div class=\"order-title d-flex justify-content-center\">\n            <h1 class=\"m-0 p-0 align-self-center text-center\">ORDER</h1>\n        </div>\n        <div class=\"order-content d-flex flex-column\">\n        \n        ${this.renderProductOrdered(PHOTO, TITLE, PRICE, QUANTITY)}\n        \n\n           \n        </div>\n    </div>\n        `;\n      this.DOM_ORDER.insertAdjacentHTML(\"beforeend\", template);\n    }\n  };\n  renderProductOrdered = (PHOTO, TITLE, PRICE, QUANTITY) => {\n    return `\n        <div class=\"product d-flex flex-row justify-content-around\">\n        <div class=\"img\">\n            <img src=\"${PHOTO}\" alt=\"\" srcset=\"\">\n        </div>\n        <div class=\"text d-flex flex-column align-self-center\">\n            <h6>${TITLE}</h6>\n            <p class=\"price\">${PRICE}</p>\n            <p>Quantity: ${QUANTITY}</p>\n            <p>Client: ClientName</p>\n            <p>Address: Address</p>\n        </div>\n    </div>\n        `;\n  };\n}\n\n//# sourceURL=webpack:///./app/views/order-views.js?");

/***/ }),

/***/ "./app/views/pagination-views.js":
/*!***************************************!*\
  !*** ./app/views/pagination-views.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ paginationView)\n/* harmony export */ });\n//*PAGINATION VIEW\nclass paginationView {\n  DOM_ALL = document.querySelector(\"main\");\n  DOM_PAGINATION = document.querySelector(\".pagination\");\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  delete = () => {\n    let product = document.querySelectorAll(\".product\");\n    for (let i = 0; i < product.length; i++) {\n      product[i].remove();\n    }\n  };\n  renderPaginationMenu = () => {\n    const template = `\n      <nav aria-label=\"Page navigation\">\n        <div class=\"pagination m-0\">\n          <p class=\"page-link page-item\" data-next = \"next\">SHOW MORE</p>\n          \n          </div>\n      </nav>\n        `;\n    this.DOM_PAGINATION.insertAdjacentHTML(\"afterbegin\", template);\n  };\n}\n\n//# sourceURL=webpack:///./app/views/pagination-views.js?");

/***/ }),

/***/ "./app/views/product-view-views.js":
/*!*****************************************!*\
  !*** ./app/views/product-view-views.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productViewView)\n/* harmony export */ });\n//*PRODUCT VIEW VIEW\n\nclass productViewView {\n  DOM_ALL = document.querySelector(\"main\");\n  DOM_PRODUCT_VIEW = document.querySelector(\".modal-dialog\");\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  render = (PRODUCT_NAME, PHOTO1, PHOTO2, PHOTO3, PRODUCT_FAMILY, PRICE, DESCRIPTION, DETAILS, DETAILS2, PRODUCTID) => {\n    var insertedContent = document.querySelector(\".insertedContent\");\n    if (insertedContent) {\n      insertedContent.parentNode.removeChild(insertedContent);\n    }\n    const template = `\n        <div class=\"modal-content insertedContent\">\n        <div class=\"modal-body d-flex flex-column mt-0\" id = ${PRODUCTID}>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                <!--?ModalTitle -->\n                <div class=\"img-text\">\n                <div class=\"title-img\">\n                  <h1 class=\"product-name pt-0\">${PRODUCT_NAME}</h1>\n\n                  <!--?ModalPhotos -->\n                <div id=\"carouselExampleIndicators\" class=\"carousel w-100 slide\" data-bs-ride=\"true\">\n                  <div class=\"carousel-indicators\">\n                    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n                    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n                    <button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n                  </div>\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\">\n                      <img src=\"${PHOTO1}\" class=\"d-block w-100\"alt=\"\" srcset=\"\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"${PHOTO2}\" class=\"d-block w-100\" alt=\"...\">\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img src=\"${PHOTO3}\" class=\"d-block w-100\" alt=\"...\">\n                    </div>\n                  </div>\n                  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Previous</span>\n                  </button>\n                  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Next</span>\n                  </button>\n                </div>\n                </div>\n                \n                <div class=\"modal-info\">\n                  <!--?Modal Info -->\n                  <div class=\"product-text p-0 m-0\">\n                    <p class=\"product-family\">${PRODUCT_FAMILY}</p>\n                    <div class=\"shipping d-flex\">\n                      <i class=\"fa-solid fa-truck-fast\"></i>\n                      <p class=\"p-0 m-0\">Free shipping & return</p>\n                    </div>\n                  </div>\n                  <!--?Quantity and size -->\n                  <div class=\"quantity d-flex\">\n                    <h1 class=\"m-0\">Quantity</h1>\n                    <select class=\"form-select quantity-form d-flex\" aria-label=\"Default select example\">\n                      <option>1</option>\n                      <option>2</option>\n                      <option>3</option>\n                      <option>4</option>\n                    </select>\n                  </div>\n    \n                  <div class=\"size d-flex\">\n                    <h1 class=\"m-0\">Size</h1>\n                    <select class=\"form-select size-form\" aria-label=\"Default select example\">\n                      <option>Medium</option>\n                      <option>Small</option>\n                      <option>Large</option>\n                      <option>Super large</option>\n                    </select>\n                  </div>\n\n                  <!--?Add to cart button -->\n    \n                  <div class=\"addtoCart d-flex justify-content-center\">\n                    <button class=\"addtoCart-button d-flex justify-content-between\" data-bs-dismiss=\"modal\" aria-label=\"Close\" data-addtocart = \"addtocart\">\n                      <p class=\"m-0\">$${PRICE}</p>\n                      <div class=\"d-flex\"><p class=\"p-0 m-0\">Add to Cart</p><i class=\"fa-solid fa-cart-shopping\"></i></div> \n                    </button>\n                  </div>\n                </div> \n                </div>  \n                  <!--?Description -->\n                  <div class=\"description\">\n                    <h1>Description & Details</h1>\n                    <p>${DESCRIPTION}</p>\n                    \n                    <ul>\n                      <li>${DETAILS}</li>\n                      <li>${DETAILS2}</li>\n                      \n                    </ul>\n                  </div>\n            </div>\n        </div>\n        `;\n    this.DOM_PRODUCT_VIEW.insertAdjacentHTML(\"afterbegin\", template);\n  };\n}\n\n//# sourceURL=webpack:///./app/views/product-view-views.js?");

/***/ }),

/***/ "./app/views/products-views.js":
/*!*************************************!*\
  !*** ./app/views/products-views.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productsView)\n/* harmony export */ });\n//*PRODUCTS VIEW\n\nclass productsView {\n  DOM_ALL = document.querySelector(\"main\");\n  DOM_MAIN = document.querySelector(\".products-section\");\n  constructor(callback) {\n    this.DOM_ALL.addEventListener(\"click\", callback);\n  }\n  delete = () => {\n    let product = document.querySelectorAll(\".product\");\n    for (let i = 0; i < product.length; i++) {\n      product[i].remove();\n    }\n  };\n  render = (photo, pName, price, productId) => {\n    const template = `\n        <div class=\"product my-2\">\n            <figure class=\"effect-bubba\" id = ${productId}>\n                <img src=${photo} alt=\"\">\n                <h3 class=\"product-name\">${pName}</h3>\n                <h3 class=\"price\">$${price}</h3>\n            <p>\n                <button class = \"buyNow\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-modal = \"product-view\">I WANT IT</button>\n            </p>\n            \n            </figure>\n            \n        </div>\n        `;\n    this.DOM_MAIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n  noAvailability = () => {\n    const template = `\n        <div class=\"error-message\">\n            <h1 class=\"error-title\">Sorry <i class=\"fa-regular fa-face-sad-cry\"></i></h1>\n            <p class=\"m-0\">We don't have these right now, but will arrive soon. We promise.</p>\n          </div>\n          `;\n    this.DOM_MAIN.insertAdjacentHTML(\"afterbegin\", template);\n  };\n}\n\n//# sourceURL=webpack:///./app/views/products-views.js?");

/***/ }),

/***/ "./app/views/search-views.js":
/*!***********************************!*\
  !*** ./app/views/search-views.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchView)\n/* harmony export */ });\n//*SEARCH VIEW\nclass searchView {\n  DOM_SEARCH = document.querySelector(\".search-input\");\n  constructor(handleSearch) {\n    this.DOM_SEARCH.addEventListener(\"input\", handleSearch);\n  }\n  get searchValue() {\n    return this.DOM_SEARCH.value;\n  }\n}\n\n//# sourceURL=webpack:///./app/views/search-views.js?");

/***/ }),

/***/ "./public/catalogue/catalogue.js":
/*!***************************************!*\
  !*** ./public/catalogue/catalogue.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_controllers_cart_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/controllers/cart-controller.js */ \"./app/controllers/cart-controller.js\");\n/* harmony import */ var _app_controllers_order_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/controllers/order-controller.js */ \"./app/controllers/order-controller.js\");\n/* harmony import */ var _app_controllers_product_view_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/controllers/product-view-controller.js */ \"./app/controllers/product-view-controller.js\");\n/* harmony import */ var _app_controllers_products_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/controllers/products-controller.js */ \"./app/controllers/products-controller.js\");\n/* harmony import */ var _app_controllers_search_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/controllers/search-controller.js */ \"./app/controllers/search-controller.js\");\n/* harmony import */ var _app_controllers_pagination_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/controllers/pagination-controller.js */ \"./app/controllers/pagination-controller.js\");\n\n\n\n\n\n\nconst products = new _app_controllers_products_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst cart = new _app_controllers_cart_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst productView = new _app_controllers_product_view_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst search = new _app_controllers_search_controller_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nconst order = new _app_controllers_order_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst pagination = new _app_controllers_pagination_controller_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n//# sourceURL=webpack:///./public/catalogue/catalogue.js?");

/***/ }),

/***/ "./public/index/arrivals.js":
/*!**********************************!*\
  !*** ./public/index/arrivals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_controllers_arrivals_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/controllers/arrivals-controller.js */ \"./app/controllers/arrivals-controller.js\");\n\nconst newArrivals = new _app_controllers_arrivals_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./public/index/arrivals.js?");

/***/ }),

/***/ "./public/index/index.js":
/*!*******************************!*\
  !*** ./public/index/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_controllers_nav_footer_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/controllers/nav-footer-controller.js */ \"./app/controllers/nav-footer-controller.js\");\n/* harmony import */ var _app_controllers_arrivals_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/controllers/arrivals-controller.js */ \"./app/controllers/arrivals-controller.js\");\n\nconst navFooter = new _app_controllers_nav_footer_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst arrivals = new _app_controllers_arrivals_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst tooltipTriggerList = document.querySelectorAll('[data-bs-toggle=\"tooltip\"]');\nconst tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));\n\n/* gsap.from(\".container-fluid\", {opacity: 0, duration: 2, delay: 1, y:30})\r\n\r\ngsap.from(\".container\", {opacity: 0, duration: 2, delay: 2, y:30})\r\n\r\ngsap.from(\".newArrivals-title\", {opacity: 0, duration: 2, delay: 3, y:30})\r\n\r\ngsap.from(\".products-info\", {opacity: 0, duration: 2, delay: 4, y:30})\r\n\r\ngsap.from(\".otherArrivals\", {opacity: 0, duration: 2, delay: 8, y:30})\r\n\r\ngsap.from(\".promotion\", {opacity: 0, duration: 2, delay: 12, y:30})\r\ngsap.from(\".newsletter\", {opacity: 0, duration: 2, delay: 12, y:30}) */\n\n//# sourceURL=webpack:///./public/index/index.js?");

/***/ }),

/***/ "./public/login/login.js":
/*!*******************************!*\
  !*** ./public/login/login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_controllers_login_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/controllers/login-controller.js */ \"./app/controllers/login-controller.js\");\n\nconst login = new _app_controllers_login_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./public/login/login.js?");

/***/ }),

/***/ "./public/users/administrator.js":
/*!***************************************!*\
  !*** ./public/users/administrator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_controllers_cart_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/controllers/cart-controller.js */ \"./app/controllers/cart-controller.js\");\n/* harmony import */ var _app_controllers_order_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/controllers/order-controller.js */ \"./app/controllers/order-controller.js\");\n\n\nconst order = new _app_controllers_order_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconsole.log(\"hello\");\n\n//# sourceURL=webpack:///./public/users/administrator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./public/index/index.js");
/******/ 	__webpack_require__("./public/index/arrivals.js");
/******/ 	__webpack_require__("./public/catalogue/catalogue.js");
/******/ 	__webpack_require__("./public/login/login.js");
/******/ 	__webpack_require__("./public/users/administrator.js");
/******/ 	__webpack_require__("./app/publisher.js");
/******/ 	__webpack_require__("./app/controllers/arrivals-controller.js");
/******/ 	__webpack_require__("./app/controllers/cart-controller.js");
/******/ 	__webpack_require__("./app/controllers/login-controller.js");
/******/ 	__webpack_require__("./app/controllers/nav-footer-controller.js");
/******/ 	__webpack_require__("./app/controllers/order-controller.js");
/******/ 	__webpack_require__("./app/controllers/pagination-controller.js");
/******/ 	__webpack_require__("./app/controllers/product-view-controller.js");
/******/ 	__webpack_require__("./app/controllers/products-controller.js");
/******/ 	__webpack_require__("./app/controllers/search-controller.js");
/******/ 	__webpack_require__("./app/model/arrivals-model.js");
/******/ 	__webpack_require__("./app/model/cart-model.js");
/******/ 	__webpack_require__("./app/model/login-model.js");
/******/ 	__webpack_require__("./app/model/order-model.js");
/******/ 	__webpack_require__("./app/model/product-view-model.js");
/******/ 	__webpack_require__("./app/model/products-model.js");
/******/ 	__webpack_require__("./app/views/arrivals-views.js");
/******/ 	__webpack_require__("./app/views/cart-views.js");
/******/ 	__webpack_require__("./app/views/login-views.js");
/******/ 	__webpack_require__("./app/views/nav-footer-views.js");
/******/ 	__webpack_require__("./app/views/order-views.js");
/******/ 	__webpack_require__("./app/views/pagination-views.js");
/******/ 	__webpack_require__("./app/views/product-view-views.js");
/******/ 	__webpack_require__("./app/views/products-views.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./app/views/search-views.js");
/******/ 	
/******/ })()
;