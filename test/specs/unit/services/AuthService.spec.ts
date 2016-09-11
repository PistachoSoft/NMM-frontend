import {expect} from 'chai';
import AuthService from '../../../../app/services/AuthService';

describe('AuthService', () => {
  it('should set authentication', () => {
    AuthService.setAuth('ok');

    expect(AuthService.isAuth()).to.be.true;
  });

  it('should remove auth', () => {
    AuthService.removeAuth();

    expect(AuthService.isAuth()).to.be.false;
  });
});
