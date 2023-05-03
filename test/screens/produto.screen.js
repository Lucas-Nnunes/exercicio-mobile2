class ProdutoScreen {

get BottomAdd (){
    return $('id:products')
}
async ClickBottomAdd() {
    await this.BottomAdd.click()
}
//Etapa de adicionar produto


get BottomProductAdd(){
    return $('android.widget.ImageButton')
}
async ClickBottomProduct(){
    await this.BottomProductAdd.click()
}

//
get AddProduct(){
return $('android.view.ViewGroup')
}
async ClickProduto(){
    await this.AddProduct.click()
}
//

get NameProduto(){
    return $('android=new UiSelector().text("Enter Product Title")')
}
async DescritionProduct(texto){
     await this.NameProduto.setValue(texto)
}

//

get FinishAdd(){
    return $('id:menu_publish')
}
async ClickFinish(){
    this.FinishAdd.click()
}


}
module.exports = new ProdutoScreen()