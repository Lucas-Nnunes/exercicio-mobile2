class ProdutoScreen {

get BottomAdd (){
    return $('id:navigation_bar_item_icon_view')
}
async ClickBottomAdd() {
    this.BottomAdd.click()
}
//Etapa de adicionar produto


get BottomProductAdd(){
    return $('id: addProductButton')
}
async ClickBottomProduct(){
    this.BottomProductAdd.click()
}

//
get AddProduct(){
return $('id: 00000000-0000-0387-ffff-ffff00000157')
}
async ClickProduto(){
    this.AddProduct.click()
}
//

get NameProduto(){
    return $('android=new UiSelector().text("Enter Product Title")')
}
async DescritionProduct(texto){
    this.NameProduto.click()
    this.NameProduto.SetValue(texto)
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