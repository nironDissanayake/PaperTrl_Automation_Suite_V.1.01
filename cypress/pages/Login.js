
class Login {

    visitPapertrlAndLogin() {

        const url = "https://qa-app233-portal.papertrl.com/#/login";
        const userName = "niron@gmail.com";
        const password = "Qwerty@123";

            cy.visit(url)
            .then(() => cy.get('#float-input').type(userName))
            .then(() => cy.get('#password').type(password))
            .then(() => cy.get(':nth-child(4) > .p-element > .p-button-label').click());
    }

}
export default Login;