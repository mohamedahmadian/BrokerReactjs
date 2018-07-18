import React from 'react';
import { Link } from 'react-router-dom';
import { General } from '../../../utils/General';
import MyOrderAdvancedSearch from './myOrder.AdvancedSearch.html';
import { withRouter } from 'react-router-dom'
import MyOrderComponent from './myOrder.component';

var moment = require('moment-jalaali');
var NumberFormat = require('react-number-format');
const TR =withRouter( ({history ,
  model = [],
  showTrackingCode,
  showDeliveredDate,
  selectedBrokerActionCode,
  
}) => (
  <tbody>
    {model.map(order => (
      <tr
        onClick={() => {
          history.push(`/orders/detail/${MyOrderComponent.selectedActionId}/${order.orderId}`);
        }}
        style={{ cursor: 'pointer' }}
        title="order.orderNegotiateTitle"
      >
        {showTrackingCode && <td> {order.trackingCode} </td>}
        <td>{moment.unix(order.ladingDateEpoch).format('jYYYY/jM/jD')}</td>
        <td>
          {moment.unix(order.createdOnEpoch).format('hh:mm:ss jYYYY/jM/jD')}
        </td>
        <td>{order.loadTypeTitle}</td>
        <td>{order.packageTypeTitle}</td>
        <td>
          {order.originCityTitle}
          <i className="la la-arrow-left la-fw text-danger" />

          {order.destinationCityTitle}
        </td>

        {showDeliveredDate && (
          <td>
           
            {moment
              .unix(order.dischargeDateEpoch)
              .format('hh:mm:ss jYYYY/jM/jD')}{' '}
          </td>
        )}

        {selectedBrokerActionCode == 3 && (
          <React.Fragment>
            <td class="text-info">
              <NumberFormat
                displayType={'text'}
                thousandSeparator={true}
                value={order.averageAmount}
              />
            </td>
            <td class="text-info">
              <NumberFormat
                displayType={'text'}
                thousandSeparator={true}
                value={order.sumAmount}
              />
            </td>
          </React.Fragment>
        )}
        {selectedBrokerActionCode != 3 && (
          <td class="text-info">
            <NumberFormat
              displayType={'text'}
              thousandSeparator={true}
              value={order.customerProposedPrice}
            />
          </td>
        )}
      </tr>
    ))}
  </tbody>
));

const MyOrder = ({
  cartableOrders,
  brokerActionsCodes,
  showTrackingCode,
  showDeliveredDate,
  selectedBrokerActionCode,
  model = [],
  changeBrokerActionCode,
  clearFilter ,
  actionId
}) => {
  return (
    <div>
      <header class="d-flex align-items-center mb-3">
        <img
          src="assets1/image/icon/brochure.svg"
          class="ml-2"
          width="60"
          height="60"
          alt="راهنمای سامانه"
        />
        <h1 class="h3 text-primary mb-0">بارهای من</h1>
      </header>
      <section>
        <div class="card">
          <div class="card-header">
            <form class="d-flex flex-xl-row flex-lg-row flex-md-row flex-column">
              <div class="input-group my-2 ml-md-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="جستجو در بارها..."
                  name="quickSearchobj"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-info"
                    type="button"
                    onClick={() => cartableOrders(true)}
                  >
                    <i class="la la-search la-fw la-lg" />جستجو
                  </button>
                </div>
              </div>
              <Link to="/orders/newOrder" class="btn btn-success my-2">
                <i class="la la-plus la-lg lg-fw" />ثبت بار جدید
              </Link>
            </form>
            <div class="d-flex justify-content-between align-items-center my-2">
              <div>
                <a
                  href=""
                  class="btn btn-info"
                  data-toggle="collapse"
                  data-target="#collapseSearch"
                  aria-expanded="false"
                  aria-controls="collapseSearch"
                >
                  <i class="la la-search-plus la-fw la-lg" />جستجوی پیشرفته
                </a>
              </div>
              <div>
                <span class="text-muted">
                  <i class="la la-list la-fw la-lg la-flip-horizontal" />نتایج
                  جستجو:
                </span>
                <span class="mr-1" />
              </div>
            </div>
            <MyOrderAdvancedSearch
              cartableOrders={cartableOrders}
              clearFilter={clearFilter}
            />
          </div>

          <div class="card-body">
            <ul
              id="menuBtn"
              class="nav nav-pills nav-rounded nav-justified"
              id="pills-tab"
              role="tablist"
              style={{ marginBottom: '15px' }}
            >
              {brokerActionsCodes.map(p => (
                <li className={p.value== MyOrderComponent.selectedActionId ? "nav-item w-25 active show" : "nav-item w-25"}>
                  <a
                    onClick={() => changeBrokerActionCode(p.value)}
                    className={`nav-link mx-2 ${
                      p.value == 0
                        ? 'la-clipboard'
                        : p.value == 1
                          ? 'la-file-text-o'
                          : p.value == 2
                            ? 'la-truck'
                            : p.value == 3
                              ? 'la-check-circle-o'
                              : ''
                    }`}
                    id="pills-tab-01"
                    data-toggle="pill"
                    href="#pills-content-01"
                    role="tab"
                    aria-controls="pills-content-01"
                    aria-selected="true"
                  >
                    <i class="la la-2x" />
                    <span class="d-none d-lg-inline d-xl-inline mr-2">
                      {' '}
                      {p.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-content-01"
                role="tabpanel"
                aria-labelledby="pills-tab-01"
              >
                <div class="table-responsive">
                  <table class="table table-hover table-sm mb-0 text-nowrap">
                    <thead class="thead-light">
                      <tr>
                        {showTrackingCode && <th scope="col">کدرهگیری</th>}
                        <th scope="col">تاریخ بارگیری</th>
                        <th scope="col">تاریخ ثبت بار</th>

                        <th scope="col">نوع بار</th>
                        <th scope="col">نوع بسته بندی</th>
                        <th scope="col">
                          مبدا
                          <i class="la la-arrow-left la-fw" />مقصد
                        </th>
                        {showDeliveredDate && <th> تاریخ تحویل </th>}

                        {selectedBrokerActionCode !== 3 && (
                          <th scope="col">
                            مبلغ پیشنهادی{' '}
                            <sup>
                              ({General.AppDefaultSetting.currencyLabelName})
                            </sup>
                          </th>
                        )}

                        {selectedBrokerActionCode === 3 && (
                          <React.Fragment>
                            <th scope="col">
                              میانگین پرداختی
                              <sup>
                                {General.AppDefaultSetting.currencyLabelName}
                              </sup>
                            </th>
                            <th scope="col">
                              مجموع پرداختی
                              <sup>
                                {General.AppDefaultSetting.currencyLabelName}
                              </sup>
                            </th>
                          </React.Fragment>
                        )}
                      </tr>
                    </thead>

                    <TR
                      model={model}
                      showTrackingCode={showTrackingCode}
                      showDeliveredDate={showDeliveredDate}
                      selectedBrokerActionCode={selectedBrokerActionCode}
                    />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrder;
