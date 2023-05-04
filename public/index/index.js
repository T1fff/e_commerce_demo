import navFooterController from "../../app/controllers/nav-footer-controller.js";
const navFooter = new navFooterController

import arrivalsController from "../../app/controllers/arrivals-controller.js"
const arrivals = new arrivalsController

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* gsap.from(".container-fluid", {opacity: 0, duration: 2, delay: 1, y:30})

gsap.from(".container", {opacity: 0, duration: 2, delay: 2, y:30})

gsap.from(".newArrivals-title", {opacity: 0, duration: 2, delay: 3, y:30})

gsap.from(".products-info", {opacity: 0, duration: 2, delay: 4, y:30})

gsap.from(".otherArrivals", {opacity: 0, duration: 2, delay: 8, y:30})

gsap.from(".promotion", {opacity: 0, duration: 2, delay: 12, y:30})
gsap.from(".newsletter", {opacity: 0, duration: 2, delay: 12, y:30}) */
