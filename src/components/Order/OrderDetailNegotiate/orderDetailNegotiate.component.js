import React, { Component } from 'react';
import OrderDetailNegotiate from './orderDetailNegotiate.html';
import orderDetailNegotiateSevice from './orderDetailNegotiate.service';
import MyOrderComponent from './../MyOrder/myOrder.component';

export default class OrderDetailsNegotiateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderTypes: [],
      menus: [],
      driverNegotiates: []
    };
  }
  componentDidMount() {
    orderDetailNegotiateSevice
      .getOrderTypes()
      .then(res => this.setState({ orderTypes: res.data }));

    const y = 1;
    const { actionId } = this.props;
    orderDetailNegotiateSevice
      .getMenus(actionId)
      .then(res => this.setState({ menus: res.data }));

    orderDetailNegotiateSevice
      .getDriverNegotiate(this.props.orderId, actionId)
      .then(res =>
        this.setState({
          driverNegotiates: res.data == null ? [] : res.data.items
        })
      );
  }
  render() {
    const { orderTypes, menus, driverNegotiates } = this.state;
    return (
      <OrderDetailNegotiate
        orderTypes={orderTypes}
        menus={menus}
        driverNegotiates={driverNegotiates}
      />
    );
  }
}
