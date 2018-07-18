import React, { Component } from 'react';
import ChangeMobile from './changeMobile.html';
import { ChangeMobileService } from './changeMobile.service';
import iziToast from 'izitoast';
import AuthService from './../../../utils/AuthService';
export default class ChangeMobileComponent extends Component {
  constructor() {
    super();
    this.state = {isStep1 : true}
    this.changeMobileStep1 = this.changeMobileStep1.bind(this);
    this.changeMobileStep2 = this.changeMobileStep2.bind(this);
  }

  changeMobileStep1(step1) {
    ChangeMobileService.ChangesMobileStep1(
      step1.newMobile,
      step1.currentPass
    ).then(res => {
      if (res.success) {
        iziToast.success({ message: res.message });
        this.setState({ isStep1: false });
      } else {
        iziToast.error({ message: res.message });
      }
    });
  }
  changeMobileStep2(info) {
    ChangeMobileService.ChangesMobileStep2(info.verificationCode).then(res=>{
      if (res.success) {
        iziToast.success({ message: res.message });
      } else {
        iziToast.error({ message: res.message });
      }
    })
  }
  render() {
    return (
      <ChangeMobile
        mobileNumber={AuthService.getCustomerMobile()}
        isStep1={this.state.isStep1}
        changeMobileStep1={this.changeMobileStep1}
        changeMobileStep2={this.changeMobileStep2}
      />
    );
  }
}
