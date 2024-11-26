const CatalogScreen = require("../../screenObjects/android/Catalog.screen");
const LoginScreen = require("../../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen");
const assert = require("assert");

describe("My Login Demo", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuOption.click();
  });
/*
  // CASO DE PRUEBA 1: Validar el ingreso al sistema con campos vacíos
  it("should show error when username and password are empty", async () => {
    await LoginScreen.login("", "");
    //await expect(LoginScreen.errorMessageText).toHaveText("Enter Password");
    await expect(LoginScreen.errorUsernameMessage).toHaveText(
      "Username is required"
    );
  });
*/


/*
  // CASO DE PRUEBA 2: Validar el ingreso al sistema con User incorrecto
  it("should show error when username is incorrect", async () => {
    await LoginScreen.login("wronguser@example.com", "10203040");

    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
*/

/*
  // CASO DE PRUEBA 3: Validar el ingreso al sistema con una contraseña incorrecta
  it("should show error when password is incorrect", async () => {
    await LoginScreen.login("bob@example.com", "wrongpassword");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
*/


/*
  // CASO DE PRUEBA 4: Validar el ingreso al sistema con caracteres especiales en User
  it("should show error when username contains special characters", async () => {
    await LoginScreen.login("bob!@#$.example.com", "10203040");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
*/

/*
  // CASO DE PRUEBA 5: Validar el ingreso al sistema con credenciales válidas
  it("should login with valid credentials", async () => {
    await LoginScreen.login("bob@example.com", "10203040");
    await expect(CatalogScreen.productsHeader).toHaveText("Products");
  });
*/


/*
  // CASO DE PRUEBA 6: Validar el límite de longitud de campo User hasta máximo 30 caracteres
  it("should show error when username exceeds 30 characters", async () => {
    const longUsername = "a".repeat(31); // 31 caracteres
    await LoginScreen.login(longUsername, "10203040");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Username cannot exceed 30 characters."
    );
  });
*/



/*
  // CASO DE PRUEBA 7: Validar el límite de longitud de campo Password hasta máximo 30 caracteres
  it("should show error when password exceeds 30 characters", async () => {
    const longPassword = "b".repeat(31); // 31 caracteres
    await LoginScreen.login("bob@example.com", longPassword);
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Password cannot exceed 30 characters."
    );
  });
*/



/*
  // CASO DE PRUEBA 8: Validar que el campo de User no acepte espacios en blanco al inicio o final
  it("should trim spaces in username field", async () => {
    await LoginScreen.login("   bob@example.com   ", "10203040");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Provided credentials do not match any user in this service."
    );
  });
*/



/*
  // CASO DE PRUEBA 9: Validar que los campos no aceptan solo espacios en blanco
  it("should show error when fields contain only spaces", async () => {
    await LoginScreen.login("   ", "   ");

    await expect(LoginScreen.errorUsernameMessague).toHaveText(
      "Username is required"
    );

    await expect(LoginScreen.errorMessageText).toHaveText(
      "Enter Password"
    );

  });
*/


/*
  // CASO DE PRUEBA 10: Validar que el usuario esté bloqueado
  it("should not login with blocked user credentials", async () => {
    await LoginScreen.login("alice@example.com", "10203040");
    await expect(LoginScreen.errorMessageText).toHaveText(
      "Sorry this user has been locked out."
    );
  });
*/

});
