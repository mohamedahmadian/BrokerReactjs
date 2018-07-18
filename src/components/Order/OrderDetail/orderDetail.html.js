import React from 'react';

import OrderDetailSection1 from './Sections/orderDetails.section1.html';
import OrderDetailSection2 from './Sections/orderDetails.section2.html';
import OrderDetailCommentSection from './Sections/orderDetails.commentSection.html';
import OrderDetailStateSection from './Sections/orderDetails.stateSection.html';
import OrderDetailsNegotiateComponent from '../OrderDetailNegotiate/orderDetailNegotiate.component';



const Header = ({ orderId, goBack }) => {
  return (
    <header className="card py-2 px-3 mb-3">
      <div
        className="d-flex flex-xl-row flex-column justify-content-between align-items-center"
        style={{ float: 'left' }}
      >
        <div className="justify-content-end my-2  mr-auto">
          <button
            type="button"
            className="btn btn-gradient-danger "
            onClick={goBack}
          >
            <i className="la la-arrow-right la-lg la-fw" />بازگشت
          </button>
        </div>
      </div>
    </header>
  );
};



const OrderDetail = props => {
  const model = props.model || { orderDetail: {} };
  const { canPublish, showConfirm, publishOrder ,actionId} = props;
  if (model.orderDetail == null) return null;
  return (
    <div>
      <Header {...props} />
      <div className="card card-body">
        <div className="card card-body mb-3">
          <OrderDetailSection1 {...props} />
        </div>
        <OrderDetailSection2 {...props} />
        <OrderDetailCommentSection />
        <OrderDetailStateSection {...props} />
        <OrderDetailsNegotiateComponent orderId={model.orderDetail.orderId} actionId={actionId} />
      </div>
      <Header {...props} />
    </div>
  );
};

export default OrderDetail;
