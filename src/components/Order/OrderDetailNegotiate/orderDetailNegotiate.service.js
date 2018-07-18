import axios from 'axios';
import { General } from '../../../utils/General';
import { BaseCustomerInputClass } from './../../About/BaseCustomerInputClass';
import AuthService from './../../../utils/AuthService';
export default class orderDetailNegotiateSevice {
  static getOrderTypes() {
    let model = new BaseCustomerInputClass();
    model.enumName = 'sortcolumndriversfororder';
    return axios
      .post(`${General.baseUrl}General/GetEnumNames`, model)
      .then(res => res.data);
  }
  static getMenus(actionCode) {
    let model = new BaseCustomerInputClass();
    model.brokerActionCode = +actionCode;
    return axios.post(`${General.baseUrl}C/BrokerOrder/GetEnumDriversForOrder`, model).then(res => res.data);
  }
  static getDriverNegotiate(orderId,actionCode)
  {
    let model = new BaseCustomerInputClass();
    model.orderId = orderId;
    model.pageSize = 10000;
    model.pageNumber = 1;
    model.brokerActionCode = actionCode;
    model.brokerCustomerId = AuthService.getCustomerId();
    model.sortColumn = 2;
    return axios.post(`${General.baseUrl}C/BrokerOrder/GetDriversForOrder`, model).then(res => res.data);
  }
}
