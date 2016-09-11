import {expect} from 'chai';
import AuthService from '../../../../app/services/AuthService';

describe('AuthService', () => {
  it('should set auth to true', () => {
    AuthService.setAuth(true);

    expect(AuthService.isAuth()).to.be.true;
  });

  it('should set auth to false', () => {
    AuthService.setAuth(false);

    expect(AuthService.isAuth()).to.be.false;
  });
});
