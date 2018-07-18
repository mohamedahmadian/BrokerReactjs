import axios from 'axios';
import { General } from '../../utils/General';
import { BaseCustomerInputClass } from './BaseCustomerInputClass';
import { Subject } from 'rxjs';
export class AboutService {
  static getAbout() {
    let model = new BaseCustomerInputClass();
    model.statictextTypeCode = 4;
    model.reference = 'BrokerAboutPage';
    return axios
      .post(`${General.baseUrl}C/MasterData/GetContent`, model)
      .then(res => res.data.data);
  }
  static sub = new Subject();
}
