import axios from 'axios';
import { General } from '../../../utils/General';
import { BaseCustomerInputClass } from '../../About/BaseCustomerInputClass';
import AuthService from './../../../utils/AuthService';
export class ChangeMobileService {
  static ChangesMobileStep1(newMobilePhone, password) {
    let model = new BaseCustomerInputClass();
    model.customerId = AuthService.getCustomerId();
    model.newMobilePhone = newMobilePhone;
    model.password = password;
    return axios
      .post(`${General.baseUrl}General/RequestChangeMobilePhone`, model)
      .then(res => res.data);
  }

  static ChangesMobileStep2(verificationCode) {
    let model=new BaseCustomerInputClass();
    model.customerId = AuthService.getCustomerId();
    model.validationCode = verificationCode;
    return axios.post(`${General.baseUrl}General/ApproveChangeMobilePhone`, model).then(res => res.data);
  }
}
