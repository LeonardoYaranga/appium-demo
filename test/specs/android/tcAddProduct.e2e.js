const CatalogScreen = require("../../screenObjects/android/Catalog.screen");
const LoginScreen = require("../../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen");
const ProductScreen = require("../../screenObjects/android/Product.screen");

describe("My Add Product Demo", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.catalogButton.click();
  });
  /*
  //Test case 1
  it("enter with correct user and password and increment de counter of the product for see in principalCounterProduct", async () => {
    //Desplazarse hasta el botón de añadir cantidad
    
    await CatalogScreen.sauceLabsBackpackProduct.click();

      await driver.touchAction([
        { action: 'press', x: 500, y: 1500 },
        { action: 'moveTo', x: 500, y: 500 },
        { action: 'release' }
      ]);
      
    cuantity = 2;
    for (let i = 0; i < cuantity; i++) {
      await ProductScreen.addCuantity.click();
    }
    await expect(ProductScreen.principalCounterProduct).toHaveText(
      `${cuantity + 1}`
    );
  });
*/

  //Test case 2
  it("enter with correct user and password and increment the counter of the product to see in kartCounter", async () => {
    // Seleccionar el producto específico
    await CatalogScreen.sauceLabsBackpackProduct.click();

    await driver.touchAction([
      { action: "press", x: 500, y: 1500 },
      { action: "moveTo", x: 500, y: 500 },
      { action: "release" },
    ]);

    cuantity = 2;
    for (let i = 0; i < cuantity; i++) {
      await ProductScreen.addCuantity.click();
    }
    await ProductScreen.addtocartbutton.click();

    // Verificar el contador principal
    await expect(ProductScreen.cartCounter).toHaveText(`${cuantity + 1}`);
  });
});
