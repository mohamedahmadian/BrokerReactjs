import axios from 'axios';
import { General } from '../../utils/General';
import { BaseCustomerInputClass } from '../About/BaseCustomerInputClass';
export class HelpService {
  static getHelp() {
    let model = new BaseCustomerInputClass();
    model.reference = '';
    model.statictextTypeCode = 1;
    return axios.post(`${General.baseUrl}C/MasterData/GetContent`, model).then(res => res.data);
  }
}
