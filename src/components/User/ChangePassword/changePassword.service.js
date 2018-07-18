import React from 'react';
import axios from 'axios';
import { General } from '../../../utils/General';
import { BaseCustomerInputClass } from './../../About/BaseCustomerInputClass';
import AuthService from './../../../utils/AuthService';
export default class ChangePasswordService {
  static changePass(current, newPass) {
    let model = new BaseCustomerInputClass();
    model.brokerCustomerId = AuthService.getCustomerId();
    model.oldPassword = current;
    model.newPassword = newPass;
    return axios
      .post(`${General.baseUrl}C/BrokerAccount/ChangePassword`, model)
      .then(res => res.data);
  }
}
