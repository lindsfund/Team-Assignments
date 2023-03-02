import {alertMessage} from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'

//build login page with template (why can't we just do this in the HTML?)
function loginPageTemplate(){
    return ` <fieldset id="loginForm">
    <legend>Login</legend>
    <div>
        <label for="email">email: </label>
        <input type="email" id="email" value="user1@email.com"required>
        <label for="password">password: </label>
        <input type="password" id="password" value="user1" required>
    </div>
    <button type="submit" id="loginButton">Login</button>
 </fieldset> `;
}

function orderTemp(){
    return` <h2>Orders</h2>
    <table id="orders">
     <thead>
       <tr><th>Id</th><th>Date</th><th>Items</th><th>Total</th></tr>
     </thead>
     <tbody class="orderBody"></tbody>
    </table>`;
}
// didn't build template for individual order because it took a lot of extra steps

export default class Admin {
    constructor(outputSelect){
        this.selectElement = document.querySelector(outputSelect);
        this.token = null;
        this.exServices = new ExternalServices();
    }
    // login method we will need to run this async-ly so we can wait for the submit response to be returned
    async login(credentials, next){
        try{
            // console.log(credentials);
            // console.log(this.exServices);
            this.token = await this.exServices.loginReq(credentials);
            // the next() call moves us forward to the retrieveOrders call in showLogin
            next();
            
        }
        catch (err) {
            console.log(err);
            alertMessage(err.message.message);
        }
    }

    //showLogin method - this should build the login Form on the admin page
    showlogin(){
        //get the template for the form and input it into the HTML
        this.selectElement.innerHTML = loginPageTemplate();

        //add a listener for the submit button
        document.querySelector('#loginButton').addEventListener('click', (e) => {
           // console.log('clicked');
            
            //grab email value
            const email = document.querySelector('#email').value;

            //grab password value
            const password = document.querySelector('#password').value;

            //combine as login
            // console.log({email,password});
            
            this.login({ email, password }, this.retrieveOrders.bind(this));
            console.log(this);
        });
    }

   async retrieveOrders(){
       try {
        //use the token from services to get all the orders
        const orders = await this.exServices.getOrders(this.token);
         console.log(orders);
        
       //dig into iterators
            // const iterator = orders.values();
            // console.log(iterator.next().value.id);

            // const iterVal = orders.map();
            // console.log(iterVal.value);

        //insert the orderTemp into the DOM (headers)
        this.selectElement.innerHTML = orderTemp();

        // find where to put the data
        const parent = document.querySelector('#orders tbody');
        parent.innerHTML = orders
        .map(
          (order) =>
            `<tr><td>${order.id}</td><td>${new Date(
              order.orderDate
            ).toLocaleDateString("en-US")}</td><td>${
              order.items.length
            }</td><td>${order.orderTotal}</td></tr>`
        )
        .join("");
       }
       catch (err){
        console.log(err);
       }
    }

}