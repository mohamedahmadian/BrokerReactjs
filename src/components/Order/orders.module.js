import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import asyncComponent from './../../asyncComponent';

const OrderHistoryComponent = asyncComponent(() =>
  import('./OrderHistory/orderHistory.component').then(module => module.default)
);
const MyOrderComponent = asyncComponent(() =>
  import('./MyOrder/myOrder.component').then(module => module.default)
);
const NewOrderComponent = asyncComponent(() =>
  import('./NewOrder/newOrder.component').then(module => module.default)
);

const OrderDetailComponent = asyncComponent(() =>
  import('./OrderDetail/orderDetail.component').then(module => module.default)
);

const OrderModule = () => {
  return (
    <div>
      <Switch>
        <Route path="/orders/history" component={OrderHistoryComponent} />
        <Route path="/orders/newOrder" component={NewOrderComponent} />
        <Route path="/orders/detail/:actionId/:orderId" component={OrderDetailComponent} />
        <Route path="/orders" component={MyOrderComponent} />
      </Switch>
    </div>
  );
};

export default OrderModule;
