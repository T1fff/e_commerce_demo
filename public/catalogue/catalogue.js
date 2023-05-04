import cartController from "../../app/controllers/cart-controller.js";
import orderController from "../../app/controllers/order-controller.js";
import productViewController from "../../app/controllers/product-view-controller.js";
import productsController from "../../app/controllers/products-controller.js";
import searchController from "../../app/controllers/search-controller.js";
import paginationController from "../../app/controllers/pagination-controller.js";



const products = new productsController
const cart = new cartController
const productView = new productViewController
const search = new searchController
const order = new orderController


const pagination = new paginationController

