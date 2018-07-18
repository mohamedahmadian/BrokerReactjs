import React, { Component } from 'react';
import MyOrder from './myOrder.html';
import iziToast from 'izitoast';
import { myOrderService } from './myOrder.service';
import { Subject } from 'rxjs';

export default class MyOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      brokerActionsCodes: [],
      model: [],
      selectedBrokerActionCode: MyOrderComponent.selectedActionId
    };
    this.cartableOrders = this.cartableOrders.bind(this);
    this.changeBrokerActionCode = this.changeBrokerActionCode.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  static selectedActionId = 0;
  componentDidMount() {
    myOrderService.getBrokerActionCode().then(res => {
      this.setState({ brokerActionsCodes: res.data });
      this.cartableOrders();
    });
  }

  cartableOrders(reset = false, filter = {}) {
    if (filter.destinationCityId == '0') filter.destinationCityId = null;

    myOrderService
      .cartableOrders(this.state.selectedBrokerActionCode, filter)
      .then(p => {
        let showtrack = false;
        if (p.data) {
          p.data.items.forEach(p => {
            if (p.canShowTrackingCode === true) {
              showtrack = true;
            }
          });
          this.setState({
            model: p.data.items,
            showTrackingCode: showtrack,
            showDeliveredDate: this.state.selectedBrokerActionCode == 3
          });
        }
      });
  }

  changeBrokerActionCode(actionId) {
    MyOrderComponent.selectedActionId = actionId;
    this.setState({ selectedBrokerActionCode: actionId }, () => {
      this.cartableOrders(false);
    });
  }
  clearFilter() {
    this.cartableOrders(true);
  }
  render() {
    return (
      <MyOrder
        cartableOrders={this.cartableOrders}
        brokerActionsCodes={this.state.brokerActionsCodes}
        model={this.state.model}
        changeBrokerActionCode={this.changeBrokerActionCode}
        selectedBrokerActionCode={this.state.selectedBrokerActionCode}
        showTrackingCode={this.state.showTrackingCode}
        showDeliveredDate={this.state.showDeliveredDate}
        clearFilter={this.clearFilter}
   
      />
    );
  }
}
