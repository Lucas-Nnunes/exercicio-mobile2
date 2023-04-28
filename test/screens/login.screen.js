class LoginScreen {

    get #LoginStore() { return $('android=new UiSelector().text("Site address")') }
    get #Continue() { return $('id:00000000-0000-030f-ffff-ffff00000030') }

    get #LoginEmail() { return $('android=new UiSelector().text("Email address")') }
    get #BottomEmail() {return $('id: 00000000-0000-0321-ffff-ffff00000038')}

    get #LoginPassword() {return $('id: 00000000-0000-033d-ffff-ffff0000002f')}
    get #BotaoSenha() {return $('id:00000000-0000-033d-ffff-ffff00000037')}
    


    async CampoText(url) { this.#LoginStore.SetValue(url) }
    async Next() { this.#Continue.click() }
    async EmailText(email) {this.#LoginEmail.SetValue(email)
    this.#LoginEmail.click()}
    
    async Next2() {this.#BottomEmail.click()}
    async LogPassword(senha) {this.#LoginPassword.SetValue(senha)}
    async ContinuePassword(){this.#BotaoSenha.click()}

}



module.exports = new LoginScreen()