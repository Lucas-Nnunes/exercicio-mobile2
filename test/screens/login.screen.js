class LoginScreen {

    get #LoginStore() { return $('android.widget.EditText') }
    get #Continue() { return $('id:bottom_button') }

    get #LoginEmail() { return $('android=new UiSelector().text("Email address")') }
    get #BottomEmail() { return $('id:login_continue_button') }

    get #LoginPassword() {return $('android.widget.EditText') }
    get #BotaoSenha() { return $('id:bottom_button') }



    async CampoText(url) {
        await this.#LoginStore.setValue(url)
    }
    async Next() { await this.#Continue.click() }
   

    async EmailText(email) {
        await this.#LoginEmail.setValue(email)
    }
    async Next2() {await this.#BottomEmail.click()}


    async LogPassword(senha) { await this.#LoginPassword.setValue(senha) }
    async ContinuePassword() { await this.#BotaoSenha.click() }

}



module.exports = new LoginScreen()