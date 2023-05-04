//*LOGIN VIEW

export default class loginView {
    DOM_ALL = document.querySelector("body")
    DOM_LOGIN = document.querySelector(".login")
    co
    
  
    constructor(callback) {
        this.DOM_ALL.addEventListener("click", callback)
    }

    getInputsValue = () => {
      let DOM_INPUT =  [document.querySelectorAll(".form-control")]
      return DOM_INPUT.reduce((acc, el) => {
        acc = []
        for (let i = 0; i < el.length; i++) {
        acc.push(el[i].value);
        }
        return acc;
        
    }, {});
      
    }

    showValid = ({inputs}) => {
      let DOM_MODAL_INPUTS = [...this.DOM_LOGIN.querySelectorAll('.form-control')]
      inputs.forEach(({name, value}) => {
        if(value){
            const element = DOM_MODAL_INPUTS.find(el => {
                return el.classList.contains(name);
            });
            
            element.classList.add('is-valid');

            setTimeout(() => {
              element.classList.remove('is-valid');
            }, 3000);
        }
    });
     
    }

    showInvalid = ({inputs}) => {
      let DOM_MODAL_INPUTS = [...this.DOM_LOGIN.querySelectorAll('.form-control')]
      inputs.forEach(({name, value}) => {
        if(!value){
            const element = DOM_MODAL_INPUTS.find(el => {
                return el.classList.contains(name);
            });
            
            element.classList.add('is-invalid');

            setTimeout(() => {
              element.classList.remove('is-invalid');
            }, 3000);
        }
    });
     
    }

    deleteInsertedContent = () => {
        var insertedContent = document.querySelector(".insertedContent");
        if(insertedContent) {
            insertedContent.parentNode.removeChild(insertedContent);
        }
    }

    renderLogin = () => {  
        const template = `
        <div class = "log insertedContent">
        <h1 class="title text-center">LOGIN</h1>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <div class="input-group d-flex">
              <span class="input-group-text" id="addon-wrapping">@</span>
              <input type="text" class="form-control login-form-email email" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" data-signinform = "signinform">
              <div class="invalid-feedback">
                Please enter a valid email.
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <div class="input-group d-flex">
              <span class="input-group-text" id="addon-wrapping">🔒</span>
              <input type="password" class="form-control login-form-password password" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" id="inputPassword" data-signinform = "signinform">
              <div class="invalid-feedback">
                <p>Please enter a valid password.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center buttons">
          <div>
            <button class="signIn my-4" type="submit" data-signin = "signin">Sign in</button> 
          </div>
          <div>
            <button class="signUp" data-signup = "signup" >Sign up</button> 
          </div>
             
          
        </div>
        </div>
        `
        this.DOM_LOGIN.insertAdjacentHTML("afterbegin", template)
        
    }

    renderWelcome = () => {
        const template = `
        <div class="welcome insertedContent">
          <h1>Welcome to <span>LUX</i></span></h1>
          <p class="m-0 mt-4">We appreciate you chose us for your next purchase.</p>
          <p>Now, we are going to set up your account to enhance and personalize your experience with us.</p>
        </div>   
        `

        this.DOM_LOGIN.insertAdjacentHTML("afterbegin", template)

        return template
        

    }

    renderSignUp_preregistration = () => {
        const template = `
        <div class = "preregistration insertedContent">
        <h1 class="title text-center">SIGN UP</h1>
          <div class="mb-3 row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <div class="input-group d-flex">
                <span class="input-group-text" id="addon-wrapping">👤</span>
                <input type="text" class="form-control name" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping" data-signupform = "signupform">
                <div class="invalid-feedback">
                  Please enter a valid name. Use 
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <div class="input-group d-flex">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control email" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" data-signupform = "signupform">
                <div class="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>
            </div>
          </div>
          
          <div class="d-flex flex-column justify-content-center buttons">
            <div>
              <button class="confirmation-signUP" data-confirmsignup = "confirmSignUp" >Sign up</button> 
            </div>

            <div class="d-flex flex-column justify-content-center buttons">
            <div class = "mistake-div mt-3 d-flex justify-content-center">
              <a class="mistake text-center" href="/public/login/login.html">Do you have an account? Click here to sign in</a> 
            </div>
            
          </div>
          </div>

        `
        this.DOM_LOGIN.insertAdjacentHTML("afterbegin", template)
    }

    renderEmailValidation = () => {
        const template = `
        <div class="validating-code insertedContent d-flex flex-column justify-content-center">
        <h6 class="m-0 mb-4 text-center">Enter the confirmation code that was sent to your email</h6>
        <div class="d-flex">
          <input type="text" class="form-control code" placeholder="Code" aria-label="Name" >
          <div class="invalid-feedback ms-3">
                Please enter a valid code.
          </div>
          <button class="NEXT" data-emailvalidated = "emailvalidated"><i class="fa-solid fa-arrow-right" data-emailvalidated = "emailvalidated"></i></button>
          
        </div>
        
        `
        this.DOM_LOGIN.insertAdjacentHTML("afterbegin", template)
    }

    renderShippingInformation = () => {
        const template = `
        <div class="shipping-info insertedContent">
        <h1 class="title text-center">Shipping Information</h1>
          <div class="my-3 row">
            <label for="name" class="col-sm-2 col-form-label">Number</label>
            <div class="col-sm-10">
              <div class="input-group d-flex ">
                <span class="input-group-text" id="addon-wrapping">📞</span>
                <input type="text" class="form-control phone" placeholder="Phone Number" aria-label="Name" aria-describedby="addon-wrapping">
                <div class="invalid-feedback ms-3">
                  Please enter a valid phone.
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
              <div class="input-group d-flex">
                <span class="input-group-text" id="addon-wrapping">📍</span>
                <input type="text" class="form-control address" placeholder="Address" aria-label="Username" aria-describedby="addon-wrapping">
                <div class="invalid-feedback ms-3">
                  Please enter a valid address.
                </div>
              </div>
            </div>
          </div>
          
          <div class="d-flex flex-column justify-content-center buttons">
            <div>
              <button class="confirmation-button complete" data-completesingup = "completesingup">Complete</button> 
            </div>
          </div>
          </div>
        `
        this.DOM_LOGIN.insertAdjacentHTML("afterbegin", template)
    }
}
