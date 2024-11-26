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

  get catalogButton(){
    return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Catalog"]');
  }
}

module.exports = new LeftSideMenuScreen();
