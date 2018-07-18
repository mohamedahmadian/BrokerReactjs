import axios from 'axios';
import { General } from '../../../utils/General';

export default class FooterService {
  static GetFooter() {
    return axios
      .post(`${General.baseUrl}General/GetAppDefaultSetting`)

      .then(res => res.data);

  }
}



