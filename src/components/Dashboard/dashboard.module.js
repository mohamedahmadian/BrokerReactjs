import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import asyncComponent from './../../asyncComponent';


const HelpComponent = asyncComponent(() =>
    import('./../Help/help.component').then(module => module.default)
)
const AboutComponent = asyncComponent(() =>
    import('./../About/about.component').then(module => module.default)
)
const ChangePasswordComponent = asyncComponent(() =>
    import('./../User/ChangePassword/changePassword.component').then(module => module.default)
)
const ChangeMobileComponent = asyncComponent(() =>
    import('./../User/ChangeMobileNumber/changeMobile.component').then(module => module.default)
)


const OrdersComponent = asyncComponent(() =>
    import('./../Order/orders.module').then(module => module.default)
)



const DashboradModule = () => {
  return (
    <div className="container my-3">
      <Route path="/Help" component={HelpComponent} />
      <Route path="/About" component={AboutComponent} />
      <Route path="/ChangePassword" component={ChangePasswordComponent} />
      <Route path="/ChangeMobile" component={ChangeMobileComponent} />
      <Route path="/" component={OrdersComponent} />
      <Route exact path="/" component={OrdersComponent} />
    </div>
  );
};

export default DashboradModule;
