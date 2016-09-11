let auth = localStorage.getItem('auth') || false;

export default class AuthService {
  static isAuth() {
    return !!auth;
  }

  static setAuth(token: string) {
    auth = token;

    localStorage.setItem('auth', token);
  }

  static removeAuth() {
    auth = null;

    localStorage.removeItem('auth');
  }
}
