let auth = JSON.parse(localStorage.getItem('auth')) || false;

export default class AuthService {
  static isAuth() {
    return auth;
  }

  static setAuth(value) {
    auth = value;

    localStorage.setItem('auth', value);
  }
}
