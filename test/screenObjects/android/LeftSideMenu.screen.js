class LeftSideMenuScreen {
  get expandMenuButton() {
    return $('//android.widget.ImageView[@content-desc="View menu"]');
  }

  get loginMenuOption() {
    return $('//android.widget.TextView[@content-desc="Login Menu Item"]');
  }

  get logoutButton(){
    return $('//android.widget.TextView[@content-desc="Logout Menu Item"]');
  }
}

module.exports = new LeftSideMenuScreen();
