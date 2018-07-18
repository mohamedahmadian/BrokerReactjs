import { General } from '../../../utils/General';
import axios from 'axios';
import { BaseCustomerInputClass } from '../../About/BaseCustomerInputClass';
import AuthService from '../../../utils/AuthService';
export default class OrderDetailService {
  static getOrder(orderId) {
    let model = new BaseCustomerInputClass();
    model.brokerCustomerId = AuthService.getCustomerId();
    model.orderId = orderId;
    return axios
      .post(`${General.baseUrl}/C/BrokerOrder/GetOrderDetail`, model)
      .then(res => res.data);
  }
  static publishOrder(orderId) {
    let model = new BaseCustomerInputClass();
    model.brokerCustomerId = AuthService.getCustomerId();
    model.orderId = orderId;
    return axios
      .post(`${General.baseUrl}/C/BrokerOrder/PublishOrder`, model)
      .then(res => res.data);
  }
  
}

