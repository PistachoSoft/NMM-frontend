let auth = localStorage.getItem('auth') || false;

export default class AuthService {
  public static isAuth() {
    return !!auth;
  }

  public static setAuth(token: string) {
    auth = token;

    localStorage.setItem('auth', token);
  }

  public static removeAuth() {
    auth = null;

    localStorage.removeItem('auth');
  }
}
