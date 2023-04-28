class myStoreScreen {

    
    get #MyStoreName() { return $('id: 00000000-0000-0254-ffff-ffff00000083') }


    async myStoreLogoDisplayed() {
        await this.#MyStoreName.waitForExist()
        return await this.#MyStoreName.isDisplayed()
    }

    

}

module.exports = new myStoreScreen()