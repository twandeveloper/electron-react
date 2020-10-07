class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(name, isAuth) {
    console.log(name);
    if (name === 'Twan') {
      isAuth((this.authenticated = true));
      console.log('Authenicated');
    } else {
      isAuth((this.isAuthenticated = false));
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb(this.authenticated);
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
