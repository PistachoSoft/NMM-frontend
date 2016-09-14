import {Promise} from 'es6-promise';
import {IErrorResponse} from '../models/responses/IErrorResponse';
import {ITokenResponse} from '../models/responses/ITokenResponse';

export default class LoginService {
  public static login(user, pass): Promise<ITokenResponse> {
    return new Promise((resolve, reject) => {
      if (user.trim() === 'test' && pass.trim() === 'test' ||
          user.trim() === 'kimjonun') {
        resolve({
          token: 'ok'
        } as ITokenResponse);
      } else {
        reject({
          message: 'Oops, try again!'
        } as IErrorResponse);
      }
    });
  }
}
