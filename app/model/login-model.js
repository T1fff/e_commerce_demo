//* LOGIN MODEL

export default class loginModel {
    regExpEmail = /[\w]+@{1}[\w]+\.[a-z]{2,3}/
    regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/
    regExpName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
    regExpConfirmationCode = /^[\d]{6}$/
    regExpPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    regExpAddress = /^[#.0-9a-zA-Z\s,-]+$/

    checkEmail = email => {
        return this.regExpEmail.test(email);
    }

    checkPassword = password => {
        return this.regExpPassword.test(password);
    }

    checkName = name => {
        return this.regExpName.test(name);
    }

    checkConfirmationCode = code => {
        return this.regExpConfirmationCode.test(code);
    }

    checkPhoneNumber = phone => {
        console.log(phone);
        return this.regExpPhone.test(phone);
    }

    checkAddress = address => {
        console.log(address);
        return this.regExpAddress.test(address);
    }

    checkDataLogin = (data) => {
        let email = [data[0]]
        let password = [data[1]]
        

        const ispassword = this.checkPassword(password)
        const isemail = this.checkEmail(email);
        
        return {
            total : ispassword && isemail,
            inputs : [
                {
                    name : 'email',
                    value : isemail
                }, 
                {
                    name : 'password',
                    value : ispassword
                }
            ]
        };
    }

    checkDataSignUp = (data) => {
        let name = [data[0]]
        let email = [data[1]]
        

        const isname = this.checkName(name)
        const isemail = this.checkEmail(email);
        
        return {
            total : isname && isemail,
            inputs : [
                {
                    name : 'name',
                    value : isname
                }, 
                {
                    name : 'email',
                    value : isemail
                }
            ]
        };
    }

    checkDataConfirmationCode = (data) => {
        let code = [data[0]]
        
        const iscode = this.checkConfirmationCode(code)
        
        return {
            total : iscode,
            inputs : [
                {
                    name : 'code',
                    value : iscode
                }, 
                
            ]
        };
    }

    checkDataShippingInfo = (data) => {
        let phone = [data[0]]
        let address = [data[1]]

        const isaddress = this.checkAddress(address)
        const isphone = this.checkPhoneNumber(phone);
        
        return {
            total :  isphone && isaddress,
            inputs : [
                {
                    name : 'phone',
                    value : isphone
                },
                {
                    name : 'address',
                    value : isaddress
                }
            ]
        };
    }

}