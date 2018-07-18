import React from 'react';
import axios from 'axios';
import { General } from '../../../utils/General';
import { BaseCustomerInputClass } from './../../About/BaseCustomerInputClass';
import AuthService from './../../../utils/AuthService';
var moment = require('moment-jalaali');
export class myOrderService {
  static getBrokerActionCode() {
    return axios
      .post(`${General.baseUrl}General/GetEnumNames`, {
        enumName: 'brokerActionCode'
      })
      .then(res => res.data);
  }
  static cartableOrders(
    selectedBrokerActionCode,
    filter = { pageNumber: 1, pageSize: 10 }
  ) {
    let model = new BaseCustomerInputClass();
    model.brokerCustomerId = AuthService.getCustomerId();
    model.brokerActionCode = selectedBrokerActionCode;
    model.filter = filter;
    return axios
      .post(`${General.baseUrl}C/BrokerOrder/BrokerCartableOrders`, model)
      .then(res => res.data);
  }
  static getPackageType() {
    let model = new BaseCustomerInputClass();
    model.pageSize = 999999;
    return axios
      .post(`${General.baseUrl}C/MasterData/GetAllPackageType`, model)
      .then(res => res.data);
  }
}
