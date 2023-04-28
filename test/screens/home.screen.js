class HomeScreen {

    get BottomSkip() {
        return $('id:button_skip')
    }

    async BottomClickSkip() {
        this.BottomSkip.click()
    }


    get #EnterStore() {
        return $('android=new UiSelector().text("Enter your store address")')
    }
    async EnterClick() {
        this.#EnterStore.click()
    }
}

module.exports = new HomeScreen()