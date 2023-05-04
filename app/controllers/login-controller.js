//*LOGIN CONTROLLER 

import loginModel from "../model/login-model.js"
import loginView from "../views/login-views.js"

export default class loginController{
    constructor() {
        this.view = new loginView
        this.model = new loginModel
        this.view = new loginView(this.handleLogin)
        this.view = new loginView(this.showSignUp)
        this.view = new loginView(this.signUp)
        this.view = new loginView(this.emailValidation)
        this.view = new loginView(this.shippingInformation)

        this.handleLogin()
        this.view.renderLogin()
        
    }

    handleLogin = async (ev) => {
        let signin =  await ev.target.dataset.signin
        if (signin) {
            const data = this.view.getInputsValue()
            const isValidData = this.model.checkDataLogin(data);
            if (isValidData.total) {
                this.view.showValid(isValidData)
                console.log("valid");
                setTimeout( function() { window.location.href = "http://127.0.0.1:5500/public/users/user.html"; }, 3000 )
            } else {
                this.view.showInvalid(isValidData)
            }
        }


    }

    showSignUp =  async (ev) => {
        let signup =  await ev.target.dataset.signup
        if (signup) {
            this.view.deleteInsertedContent()
            this.view.renderWelcome()
            setTimeout(() => {
                this.view.deleteInsertedContent()
                this.view.renderSignUp_preregistration()

            }, 15000);

            
        }
    }

    signUp = async (ev) => {
        let signupConfirmation =  await ev.target.dataset.confirmsignup

        if (signupConfirmation) {
            const data = this.view.getInputsValue()
            const isValidData = this.model.checkDataSignUp(data);
            if (isValidData.total) {
                console.log("valid");
                this.view.showValid(isValidData)
                setTimeout(() => {
                this.view.deleteInsertedContent()
                this.view.renderEmailValidation()
                }, 3000);
            } else {
                this.view.showInvalid(isValidData)
            }

            
        }
        
    }

    emailValidation = async (ev) => {
        let validateEmail =  await ev.target.dataset.emailvalidated

        if (validateEmail) {
            const data = this.view.getInputsValue()
            const isValidData = this.model.checkDataConfirmationCode(data);
            if (isValidData.total) {
                console.log("valid");
                this.view.showValid(isValidData)
                setTimeout(() => {
                    this.view.deleteInsertedContent()
                    this.view.renderShippingInformation()
                }, 3000);
            } else {
                this.view.showInvalid(isValidData)
            }
            
        }
        
    }

    shippingInformation = async (ev) => {
        let validateShippingInfo =  await ev.target.dataset.completesingup

        if (validateShippingInfo) {
            const data = this.view.getInputsValue()
            console.log(data);
            const isValidData = this.model.checkDataShippingInfo(data);
            console.log(isValidData);
            if (isValidData.total) {
                console.log("valid");
                this.view.showValid(isValidData)
            } else {
                this.view.showInvalid(isValidData)
            }
            
        }
        
    }

    
}