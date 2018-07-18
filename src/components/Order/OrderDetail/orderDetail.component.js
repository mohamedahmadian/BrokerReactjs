import React, { Component } from 'react';
import OrderDetail from './orderDetail.html';
import { createBrowserHistory } from 'history';
import OrderDetailService from './orderDetail.service';
import iziToast from 'izitoast';
const history = createBrowserHistory();
export default class OrderDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { order: {}, canPublish: false  , canStopNegotiate : false ,canStopNegotiate:false};

    
    this.orderId = props.match.params.orderId;
    this.actionId = props.match.params.actionId;
  }

  componentDidMount() {
    OrderDetailService.getOrder(this.orderId).then(res => {
      this.setState({ order: res.data });
    });
  }

  publishOrder = () => {
    OrderDetailService.publishOrder(this.orderId).then(res => {
      iziToast.success({
        message: 'بار با موفقیت در دسترس کلیه رانندگان قرار گرفت'
      });
    });
  }
  stopNegotiate = () => {
    iziToast.success({
      message: this.orderId
    });
  }

  resumeNegotiate = () => {
    iziToast.success({
      message: this.orderId
    });
  }
  
  showConfirm = (part, state) => {
    this.setState({ [part]: state });
  }
  goBack() {
    history.goBack();
  }
  render() {
    return (
      <OrderDetail
        goBack={this.goBack}
        model={this.state.order}
        showConfirm={this.showConfirm}
        {...this.state}
        publishOrder={this.publishOrder} 
        stopNegotiate = {this.stopNegotiate}
        resumeNegotiate = {this.resumeNegotiate}
        actionId = {this.actionId}
      />
    );
  }
}
