
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const produtoScreen = require("../screens/produto.screen");

describe('Exercicio', () => {

    it('Validando as credenciais para cadastrar um produto na loja', async () => {
        await homeScreen.BottomClickSkip()
        await homeScreen.EnterClick()
        await loginScreen.CampoText('http://lojaebac.ebaconline.art.br/')
        await loginScreen.Next()
        await loginScreen.EmailText('lojaebacqe@gmail.com')
        await loginScreen.Next2()
        await loginScreen.LogPassword('GD*peToHNJ1#c$sgk08EaYJQ')
        await loginScreen.ContinuePassword()   

        expect(await $('EBAC - Shop')).toBeDisplayed()

    });
 

    it('Cadastrando um novo produto', async () => {
        await produtoScreen.ClickBottomAdd()
        await produtoScreen.ClickBottomProduct()
        await produtoScreen.ClickProduto()
        await produtoScreen.DescritionProduct('Produto2')
        await produtoScreen.ClickFinish()

        expect(await $('Produto2')).toBeDisplayed()
    });
});
