import ExternalServices from './ExternalServices.mjs';
import { alertMessage } from './utils.mjs';

function logInPageTemplat() {
    return `<div class="login">
    <form class="loginform">
        <label for ="email">Email :</label>
        <input type="text" id="email" name="email" value="user1@email.com">
        <label for="pwd">Password :</label>
        <input type="password" id="pwd" name="pwd" value="user1">
        <button type="button" name="submitButton" id="submitButton">Submit</button>
    </form>
</div>`
}

export default class Admin {
    constructor(outputSelect){
        this.selectElement = document.querySelector(outputSelect);
        this.newXservices = new ExternalServices;
        this.token = null;
    }
    async login(credentials) {
        try{
            this.token = await this.newXservices.loginRequest(credentials); 
            //next();
        }
        catch(err){ 
            alertMessage(err.message.message);
        }

    }
    showLoging() {
        this.selectElement.innerHTML = logInPageTemplat();

        document.querySelector('#submitButton').addEventListener('click', (e) =>{ 
            console.log('click');
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#pwd').value;
            
            this.login({email, password}, this.retrieveOrders.bind(this)); //This line concadenates the constant using a literal and binds it to the login function as 'credentials'//
            //console.log({email, password}, this)
            console.log(this);
        })
    }

    async retrieveOrders() {
        try{
            const orders = await this.newXservices.getOrder(this.token);
            console.log(this);
        }
        catch(err){
            console.log(err);
        }
    }

}