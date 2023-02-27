
export default class Admin {
    constructor(outputSelect){
        this.selectElement = document.querySelector(outputSelect);
    }
    // login method we will need to run this async-ly so we can wait for the submit response to be returned
    async login(){}

    //showLogin method - this should build the login Form on the admin page
    showlogin(){
        //get the template for the form and input it into the HTML
        this.selectElement.innerHTML = loginPageTemplate();

        //add a listener for the submit button
        document.querySelector('#loginButton').addEventListener('click', (e) => {
            //grab email value
            const email = document.querySelector('#email').value;

            //grab password value
            const password = document.querySelector('#password').value;

            //combine as login
            this.login({email, password});
        });
    }

    //build login page with template (whay can't we just do this in the HTML?)
    loginPageTemplate(){
        return ` <fieldset id="loginForm">
        <legend>Login</legend>
        <div>
            <label for="email">email: </label>
            <input type="email" id="email">
            <label for="password">password: </label>
            <input type="password" id="password">
        </div>
        <button type="submit" id="loginButton">Login</button>
     </fieldset> `;
    }

}