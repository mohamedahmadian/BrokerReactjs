import React from 'react';

const OrderDetailStateSection = ({ model }) => {
  return (
    <div className="card card-body">
      <div className="table-responsive text-center my-4">
        <div className="btn-group">
          <div className="btn btn-outline-secondary bg-white text-secondary border-0 ml-1">
            <img
              src="/assets1/image/icon/delivery.svg"
              className="d-inline animated animation-hover pulse"
              width="50"
              height="50"
            />
            <span className=" mr-2 text-muted">کامیون درخواستی:</span>
            <span className="mr-1">
              {model.orderDetail.carsNumberRequested}
            </span>
            {model.orderDetail.canCarsNumberRequested && (
              <button
                type="button"
                className="btn btn-warning btn-icon btn-icon-sm mr-2"
                data-toggle="modal"
                data-target="#UpdateCarNumberModal"
                popover="ویرایش"
                triggers="hover"
                placement="left"
              >
                <i className="la la-edit la-fw la-lg" />
              </button>
            )}
          </div>
          <div className="btn btn-outline-secondary bg-white text-secondary">
            <img
              src="/assets1/image/icon/check.svg"
              className="d-inline animated animation-hover pulse"
              width="50"
              height="50"
            />
            <span className=" mr-2 text-muted">در حال مذاکره:</span>
            <span className=" mr-1">{model.orderDetail.negotiationCount}</span>
          </div>
          <div className="btn btn-outline-secondary bg-white text-secondary">
            <img
              src="/assets1/image/icon/box.svg"
              className="d-inline animated animation-hover pulse"
              width="50"
              height="50"
            />
            <span className=" mr-2 text-muted">در حال بارگیری:</span>
            <span className=" mr-1">{model.orderDetail.loadingCount}</span>
          </div>
          <div className="btn btn-outline-secondary bg-white text-secondary">
            <img
              src="/assets1/image/icon/desert.svg"
              className="d-inline animated animation-hover  pulse"
              width="50"
              height="50"
            />
            <span className=" mr-2 text-muted">در حال حمل:</span>
            <span className=" mr-1">{model.orderDetail.shippingCount}</span>
          </div>
          <div className="btn btn-outline-secondary bg-white text-secondary">
            <img
              src="/assets1/image/icon/like.svg"
              className="d-inline animated animation-hover pulse"
              width="50"
              height="50"
            />
            <span className=" mr-2 text-muted">تحویل شده:</span>
            <span className=" mr-1">{model.orderDetail.deliveryCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailStateSection;
