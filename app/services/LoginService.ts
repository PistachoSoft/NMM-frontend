import {Promise} from 'es6-promise';
import {ErrorResponse} from '../models/responses/ErrorResponse';
import {TokenResponse} from '../models/responses/TokenResponse';

export default class LoginService {
  static login(user, pass): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
      console.log('Login:', user, pass);

      if (user.trim() === 'test' && pass.trim() === 'test' ||
          user.trim() === 'kimjonun') {
        resolve({
          token: 'ok'
        } as TokenResponse);
      } else {
        reject({
          message: 'Oops, try again!'
        } as ErrorResponse);
      }
    });
  }
}
