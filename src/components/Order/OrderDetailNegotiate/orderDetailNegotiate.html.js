import React from 'react';
var NumberFormat = require('react-number-format');
var _ = require('lodash');
var moment = require('moment-jalaali');
const OrderDetailNegotiate = ({
  orderTypes = [],
  menus = [],
  driverNegotiates = []
}) => {
  return (







    
    
    <div>

      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {menus.map((menu, i) => (
          <li>
            <a
              className={i == 0 ? 'nav-link active' : 'nav-link'}
              id={`men_${i}`}
              data-toggle="tab"
              href={`#menu${i}`}
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              {menu.name}
            </a>
          </li>
        ))}
        <li className="nav-item mr-auto w-20-xl w-30-lg w-50-md w-100 my-2">
          <div className="nav-link p-0 d-flex align-items-center text-nowrap">
            <select className="form-control form-control-sm">
              <option value={-1}>مرتب سازی براساس</option>
              {orderTypes.map(p => <option value={p.value}>{p.name}</option>)}
            </select>
          </div>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        {menus.map((menu, i) => (
          <div
            className={i == 0 ? 'tab-pane fade show active' : 'tab-pane fade '}
            id={`menu${i}`}
          >
            <div class="table-responsive">
              <table class="table m-0 text-nowrap">
                <thead class="bg-info text-white">
                  <tr class="text-center">
                    <th>نام و نام خانوادگی</th>
                    <th>نوع</th>
                    <th>نوع ماشین و بارگیر</th>
                    <th>قیمت پیشنهادی</th>
                    <th>تاریخ پیشنهادی</th>
                    <th>تماس تلفنی</th>
                    <th>وضعیت</th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  {driverNegotiates
                    .filter(p => p.filterCode == menu.value || menu.value == 0)
                    .map(driver => (
                      <tr>
                        <td>
                          <div
                            style={{ cursor: 'pointer;' }}
                            className="d-flex align-items-center"
                          >
                            {driver.hasBrokerComment && (
                              <i className="la la-bookmark-o" />
                            )}

                            <img
                              src={`${driver.driverImageLink ||
                                'assets\\img\\profile.png'}`}
                              className="rounded-circle"
                              width="55"
                              height="55"
                            />
                            <div className="mr-2">
                              <span
                                className="d-block"
                                style={{ cursor: 'pointer;' }}
                              >
                                {' '}
                                {driver.firstName} {driver.lastName}
                              </span>
                              <p className="m-0" dir="ltr" />
                            </div>
                          </div>
                        </td>
                        <td class="align-middle">
                          {' '}
                          {driver.customerTypeTitle}
                        </td>

                        <td class="align-middle"> {driver.lodingTypeTitle}</td>
                        <td class="align-middle text-info h5">
                          <span>
                            <NumberFormat
                              displayType={'text'}
                              thousandSeparator={true}
                              value={driver.negotiatePrice}
                            />
                          </span>
                          <sup>ریال</sup>
                        </td>

                        <td className="align-middle">
                          {moment
                            .unix(driver.negotiateLadingDateEpoch)
                            .format('jYYYY/jMM/jDD')}{' '}
                        </td>
                        <td className="align-middle" >
                          <div
                            dir="ltr"
                            class="d-inline h5 hide-phone"
                            data-last="000000"
                          >
                            <a
                              href={
                                driver.isReadDriverPhone
                                  ? 'tel:' + driver.mobilePhone
                                  : null
                              }
                            >
                              {driver.isReadDriverPhone ? (
                                <span>{driver.mobilePhone}</span>
                              ) : (
                                <span
                                  class="text-muted"
                                  id="tdPhonenumber{{driver.orderNegotiateId}}"
                                >
                                  {driver.mobilePhone.substring(0, 4)} XXXXX
                                </span>
                              )}
                            </a>
                          </div>
                        </td>
                        <td className="align-middle">
                          <span
                            class="badge badge-pill "
                            style={{ backgroundColor: driver.stateTitleColor }}
                          >
                            {driver.stateTitle}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetailNegotiate;
