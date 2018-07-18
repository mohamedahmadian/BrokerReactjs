import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import HeaderComponent from './Dashboard/header/header.component';
import FooterComponent from './Dashboard/Footer/footer.component';
import DashboradModule from './Dashboard/dashboard.module';
import './MainLayout.css'
export default class MainLayout extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = { redirect: false };
  }
  renderRedirect() {
    if (this.state.redirect) return <Redirect to="/Login" />;
  }

  logout() {
    localStorage.clear();
    this.setState({ redirect: true });
  }
  render() {
    return (
      <div>
        
        {this.renderRedirect()}
        <HeaderComponent />
        <main className="d-flex flex-column w-100 justify-content-center fullpage-height">
          <DashboradModule />
          <FooterComponent />
        </main>
      </div>
    );
  }
}
