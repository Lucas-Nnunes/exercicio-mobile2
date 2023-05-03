class myStore {

   
    get ValidarText(){
        return $('id:toolbar_subtitle')
    }

    async Text(){
         await this.ValidarText.getText()
    }

   
}
module.exports = new myStore()