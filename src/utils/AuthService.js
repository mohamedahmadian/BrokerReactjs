import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import { General } from './General';
import { BaseCustomerInputClass } from './../components/About/BaseCustomerInputClass';
class AuthService {
  static isUserLogged() {
    if (!localStorage.getItem('user')) return false;
    return true;
  }

  static getTokenFromServer() {
    let result = axios
      .post(`${General.baseUrl}General/GetCustomerToken`, {
        mobilePhone: '09158939927'
      })
      .then(res => {
        localStorage.setItem('token', res.data.data);
      });
  }
  static getCustomerMobile() {
    return localStorage.getItem('mobile') || '09158939927';
  }
  static getCustomerId() {
    return localStorage.getItem('customerId') || 150;
  }
  static setCustomerId(customerId) {
    return localStorage.setItem('customerId', customerId);
  }
  static getToken() {
    return localStorage.getItem('token') || 0;
  }
  static loginStep1(mobilePhone) {
    let model = new BaseCustomerInputClass();
    model.mobilePhone = mobilePhone;
    return axios
      .post(`${General.baseUrl}C/BrokerAccount/LoginBrokerStep1`, model)
      .then(res => res.data);
  }
  static loginStep2(password) {
    let model = new BaseCustomerInputClass();
    model.brokerCustomerId = AuthService.getCustomerId();
    model.password = password;
    return axios
      .post(`${General.baseUrl}C/BrokerAccount/LoginBrokerStep2`, model)
      .then(res => res.data);
  }
}
export default AuthService;
