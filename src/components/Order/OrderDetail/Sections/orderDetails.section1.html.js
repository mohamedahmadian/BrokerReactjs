import React from 'react';
import SweetAlert from 'sweetalert2-react';
import { General } from '../../../../utils/General';
import { Link } from 'react-router-dom';
var moment = require('moment-jalaali');
var NumberFormat = require('react-number-format');
const AppDefaultSetting = General.AppDefaultSetting;

const CanPublishButton = ({ model, canPublish, showConfirm, publishOrder }) => {
  if (model.orderDetail.canPublish)
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-sm btn-success ml-2 my-2"
          onClick={() => showConfirm('canPublish', true)}
        >
          اعلام بار به رانندگان
        </button>
      
        <SweetAlert
          show={canPublish}
          title="اعلام بار"
          text="آیا بااعلام بار به رانندگان موافق هستید"
          type="warning"
          showCancelButton={true}
          confirmButtonText="بله موافقم"
          cancelButtonText="خیر ، موافق نیستم"
          onConfirm={() => {
            showConfirm('canPublish', false);
            publishOrder();
          }}
        />
      </React.Fragment>
    );
  return null;
};
const CanEditButton = ({ model }) => {
  if (model.orderDetail.canEdit)
    return (
      <Link
        to={`'/orders/detail/':${model.orderDetail.orderId}`}
        className="btn btn-sm btn-success ml-2 my-2"
      >
        ویرایش
      </Link>
    );
  return null;
};
const CanStopNegotiate = ({ model, showConfirm, stopNegotiate ,canStopNegotiate }) => {
    if (model.orderDetail.statecode === 1 && model.orderDetail.canStopNegotiate && !model.orderDetail.isStopNegotiate)
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-sm btn-danger ml-2 my-2"
            onClick={() => showConfirm('canStopNegotiate', true)}
          >
            توقف ارسال پیشنهاد
          </button>
        
          <SweetAlert
            show={canStopNegotiate}
            title="اعلام بار"
            text="آیا با توقف ارسال بار موافق هستید"
            type="warning"
            showCancelButton={true}
            confirmButtonText="بله موافقم"
            cancelButtonText="خیر ، موافق نیستم"
            onConfirm={() => {
              showConfirm('canStopNegotiate', false);
              stopNegotiate();
            }}
          />
        </React.Fragment>
      );
    return null;
};
const CanResumeNegotiate = ({ model, showConfirm, resumeNegotiate , canResumeNegotiate  }) => {
    if (model.orderDetail.statecode === 1 && model.orderDetail.canStopNegotiate && model.orderDetail.isStopNegotiate)
      return (
        <React.Fragment>
          <button
            type="button"
            className="btn btn-sm btn-danger ml-2 my-2"
            onClick={() => showConfirm('canResumeNegotiate', true)}
          >
            توقف ارسال پیشنهاد
          </button>
        
          <SweetAlert
            show={canResumeNegotiate}
            title="اعلام بار"
            text="آیا با درخواست ارسال بار موافق هستید"
            type="warning"
            showCancelButton={true}
            confirmButtonText="بله موافقم"
            cancelButtonText="خیر ، موافق نیستم"
            onConfirm={() => {
              showConfirm('canResumeNegotiate', false);
              resumeNegotiate();
            }}
          />
        </React.Fragment>
      );
    return null;
};

const OrderDetailSection1 = props => {
  const { model, showConfirm, canPublish, publishOrder } = props;
  return (
    <div className="row">
      <div className="col-md-6 mb-2">
        <div>
          <p className="h5 mb-2">
            <small className="text-muted ml-2">
              <i className="la la-cube la-lg la-fw" />نوع بار :
            </small>
            {model.orderDetail.loadTypeTitle}
          </p>
          <p className="h5 mb-2">
            <small className="text-muted ml-2">
              <i className="la la-flag la-lg la-fw" />وضعیت بار :
            </small>
            {model.orderDetail.stateTitle}
          </p>
          {model.orderDetail.canShowTrackingCode && (
            <p className="h5 mb-2" style={{ fontFamily: 'arial' }}>
              <small className="text-muted ml-2">
                <i className="la la-barcode la-lg la-fw" />کد رهگیری :
              </small>
              {model.orderDetail.trackingCode}
            </p>
          )}
          <p className="mb-2">
            <i className="la la-map-marker la-lg la-fw text-danger" />
            <span>{model.orderDetail.originCityTitle}</span>
            <i className="la la-arrow-left la-fw la-lg text-muted mx-2" />
            <i className="la la-map-marker la-lg la-fw text-success" />
            <span>{model.orderDetail.destinationCityTitle}</span>
          </p>
          <p className="mb-2">
            <i className="la la-calendar la-lg la-fw" />
            <span className="text-danger ml-1">تاریخ بارگیری:</span>
            {model.orderDetail.ladingDateEpoch != null &&
              moment
                .unix(model.orderDetail.ladingDateEpoch)
                .format('jYYYY/jMM/jDD')}
            <span className="text-muted mx-2">|</span>
            <span className="text-success ml-1">تاریخ تخلیه:</span>
            {model.orderDetail.dischargeDateEpoch != null &&
              moment
                .unix(model.orderDetail.dischargeDateEpoch)
                .format('jYYYY/jMM/jDD')}
          </p>
          <p className="mb-2">
            <CanPublishButton {...props} />
            <CanEditButton {...props} />
            <CanStopNegotiate {...props} />
            <CanResumeNegotiate {...props} />
          </p>
        </div>
      </div>

      <div className="col-md-6 mb-2">
        <div className="float-left">
          <div className="px-4 py-2 bg-light d-inline-flex flex-column rounded mr-auto text-info">
            <p className="m-0">
              <small className="d-block">مبلغ پیشنهادی</small>
              <span className="h3">
                <NumberFormat
                  displayType={'text'}
                  thousandSeparator={true}
                  value={model.orderDetail.customerProposedPrice}
                />
                <sup className="mr-1">
                  {AppDefaultSetting.currencyLabelName}
                </sup>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailSection1;
