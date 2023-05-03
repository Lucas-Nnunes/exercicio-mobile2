class HomeScreen {

    get BottomSkip() {
        return $('id:button_skip')
    }

    async BottomClickSkip() {
        await this.BottomSkip.click()
    }


    get #EnterStore() {
        return $('android=new UiSelector().text("Enter your store address")')
    }
    async EnterClick() {
        await this.#EnterStore.click()
    }
}

module.exports = new HomeScreen()