import { General } from './General';
import axios from 'axios';
import { BaseCustomerInputClass } from './../components/About/BaseCustomerInputClass';
import { resolve } from 'path';
class CityService {
  static cities = [];
  getCity() {
    if (CityService.cities.length == 0)
      return this.getCities().then(res => {
        CityService.cities =[{id:0,text:'همه موارد'}, ...res.data.items.map(p => ({
          id: p.id,
          text: p.name
        }))];

        return CityService.cities ;
      });
    else return new Promise(function(res,rej){
      res(CityService.cities)
    }) 
  }

  getCities() {
    let model = new BaseCustomerInputClass();
    model.pageSize=9999999;
    return axios
      .post(`${General.baseUrl}C/MasterData/GetAllCity`, model)
      .then(res => res.data);
  }
}
export default CityService;
