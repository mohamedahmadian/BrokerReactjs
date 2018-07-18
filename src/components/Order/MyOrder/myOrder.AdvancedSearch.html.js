/* global $ */
import React from 'react';
import { DatePicker, DateRangePicker } from 'react-advance-jalaali-datepicker';
import lifecycle from 'react-pure-lifecycle';
import CityService from './../../../utils/CityService';
import { General } from '../../../utils/General';
import { BaseCustomerInputClass } from './../../About/BaseCustomerInputClass';
<<<<<<< HEAD
=======









>>>>>>> parent of 7c53937... p12
var moment = require('moment-jalaali');
let createdOnFrom, createdOnTo, form;

const methods = {
  componentDidMount(props) {
    new CityService().getCity().then(res => {
      $('#source').select2({ data: res , width: '100%'  });
    });

    $('#packageType_SearchPhrase').select2({
      width: '100%' ,
      dir: 'rtl',
      ajax: {
        type: 'POST',
        url: `${General.baseUrl}C/MasterData/GetAllPackageType`,
        dataType: 'json',
        contentType: 'application/json',
        data: function(params) {
          let query = new BaseCustomerInputClass();
          query.pageSize = 9999999;
          query.name = params.term;
          return JSON.stringify(query);
        },
        processResults: function(data) {
          return {
            results: [
              { id: null, text: 'همه موارد' },
              ...data.data.items.map(p => ({ id: p.id, text: p.name }))
            ]
          };
        }
      }
    });

    $('#fromDate').pDatepicker({
      format: 'YYYY/MM/DD',
      autoClose: true,
      onSelect: function(x) {
        createdOnFrom = moment(x).format('YYYY/MM/DD');
      }
    });
    $('#toDate').pDatepicker({
      format: 'YYYY/MM/DD',
      autoClose: true,
      onSelect: function(x) {
        createdOnTo = moment(x).format('YYYY/MM/DD');
      }
    });
    form.reset();
  }
};

const MyOrderAdvancedSearch = ({ hasFiler=false, cartableOrders, clearFilter }) => {

  function reset() {
    form.reset();
    $('#source')
      .val('')
      .change();
    $('#packageType_SearchPhrase')
      .val('')
      .change();
    clearFilter();
  }
  return (
    <div
      className={hasFiler ? 'show' : 'collapse'}
      id="collapseSearch"
    >
      <div className="card card-body mb-3 ">
        <form
          id="f1"
          className="row"
          style={{ backgroundColor: '#d6e1e5' }}
          ref={frm => (form = frm)}
        >
          <div className="col-lg-4 col-md-12">
            <div className="form-group row">
              <label className="col-12 small">تاریخ ثبت بار</label>
              <div className="col-sm-6 mb-2">
                <div
                  className="input-group input-group-sm"
                  style={{ position: 'relative' }}
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text">از</span>
                  </div>
                  <input
                    type="text"
                    id="fromDate"
                    placeholder="انتخاب تاریخ"
                    className="form-control form-control-sm date"
                  />
                </div>
              </div>
              <div className="col-sm-6 mb-2">
                <div
                  className="input-group input-group-sm"
                  style={{ position: 'relative' }}
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text">تا</span>
                  </div>
                  <input
                    type="text"
                    id="toDate"
                    placeholder="انتخاب تاریخ"
                    className="form-control form-control-sm date"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <div class="form-group row">
              <label class="col-12 small">مقصد</label>
              <div class="col-12">
                <select
                  className="form-control form-control-sm"
                  name="state"
                  id="source"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-12">
            <div class="form-group row">
              <label class="col-12 small">نوع بسته بندی :</label>
              <div class="col-12">
                <select
                  id="packageType_SearchPhrase"
                  className="form-control form-control-sm"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 d-flex align-items-end">
            <div className="form-group w-100">
              <button
                type="button"
                onClick={() =>
                  cartableOrders(true, {
                    createdOnFrom,
                    createdOnTo,
                    packageTypeId: $('#packageType_SearchPhrase').val(),
                    destinationCityId:$("#source").val()
                  })
                }
                className="btn btn-sm btn-primary"
              >
                اعمال فیلتر{' '}
              </button>
              <button
                type="button"
                onClick={reset}
                className="btn btn-sm btn-danger"
              >
                {' '}
                حذف فیلتر
              </button>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" />
    </div>
  );
};

export default lifecycle(methods)(MyOrderAdvancedSearch);
