import {General}  from '../../utils/General';
import AuthService from '../../utils/AuthService';

export class BaseCustomerInputClass {
  constructor() {
    this.token = AuthService.getToken();
  }
  appCode = 1;
  deviceTypecode = 0;
  token = 1;
}
